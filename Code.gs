/**
 * Email Templating Web App for Support Agents
 * Main controller script for the web application
 */

/**
 * Serves the web application HTML
 * @param {Object} e - Event object from Google Apps Script
 * @return {HtmlOutput} The HTML page for the web app
 */
function doGet(e) {
  return HtmlService.createTemplateFromFile("index")
    .evaluate()
    .setTitle("Email Templates")
    .addMetaTag("viewport", "width=device-width, initial-scale=1")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Includes HTML files in the main HTML file
 * @param {string} filename - Name of the file to include
 * @return {string} The content of the file
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Gets user information from the spreadsheet
 * @param {string} query - Employee ID (number) or name (string)
 * @return {Object} User object with firstName property, or null if not found
 */
function getUser(query) {
  // Get the active spreadsheet and sheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("users");

  if (!sheet) {
    Logger.log("Users sheet not found");
    return null;
  }

  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();

  // Determine if query is an EID (number) or name (string)
  const isEid = /^\d+$/.test(query);

  for (let i = 0; i < values.length; i++) {
    const row = values[i];
    const eid = row[0];
    const fullName = row[1];

    if (isEid && eid.toString() === query) {
      // Extract first name from "Lastname, Firstname" format
      const firstName = fullName.split(",")[1].trim();
      return { firstName: firstName };
    } else if (!isEid && fullName.toLowerCase().includes(query.toLowerCase())) {
      // Extract first name from "Lastname, Firstname" format
      const firstName = fullName.split(",")[1].trim();
      return { firstName: firstName };
    }
  }

  return null;
}

/**
 * Gets the topics object for client-side rendering
 * @return {Object} The topics object from templates.gs
 */
function getTopics() {
  return topics;
}

/**
 * Create a draft email requesting for adding a new user
 */
function createRegistrationDraft(firstName, lastName, eid) {
  const subject = "Email Templating System - New EID Registration Request";
  const body = `
Hello, 

Kindly add my information to our Email Templating System database: 

First Name: ${firstName}
Last Name: ${lastName}
EID: ${eid}

Regards,

--Requested via the Email Templating System form.--
  `.trim();

  const recipient = "myemail@server.com";
  GmailApp.createDraft(recipient, subject, body)
}
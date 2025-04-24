function doGet(e) {
  return HtmlService.createHtmlOutputFromFile("index").setTitle("Email Template App");
}

function getUserFirstName(query) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("users");
  const data = sheet.getDataRange().getValues();
  query = query.trim();

  for (let row of data) {
    const eid = row[0].toString();
    const fullName = row[1];
    if (query === eid) {
      const firstName = fullName.split(", ")[1].split(" ")[0];
      return firstName;
    }
  }
  // Assume it's a name input if no EID match
  return query.split(" ")[0];
}

function getTopics() {
  return topics; // defined in templates.gs
}

// === utils.gs ===

/**
 * Reads the 'email_templates' spreadsheet and converts it into the nested topics object
 * Expected columns:
 * [Level 1 Topic, Level 2 Subtopic, Level 3 Case, Tasks, Backend Note, Email Subject, Email Body]
 * Tasks should be separated with semicolons (;) in the spreadsheet
 * @returns {Object} The structured topics object
 */
function loadTemplatesFromSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('email_templates');
  if (!sheet) throw new Error('Sheet "email_templates" not found');

  const rows = sheet.getDataRange().getValues();
  const topics = {};

  for (let i = 1; i < rows.length; i++) { // skip header
    const [level1, level2, level3, tasksRaw, backendNote, subject, body] = rows[i];

    if (!level1) continue; // skip invalid rows

    const taskList = tasksRaw ? tasksRaw.split(';').map(t => t.trim()).filter(t => t.length > 0) : [];
    const resolution = {
      tasks: taskList,
      backend_note: backendNote || '',
      email_subject: subject || '',
      email_body: body || ''
    };

    if (!topics[level1]) topics[level1] = {};
    const level1Node = topics[level1];

    if (!level2) {
      // Level 1 is terminal
      level1Node.resolution = resolution;
    } else {
      if (!level1Node[level2]) level1Node[level2] = {};
      const level2Node = level1Node[level2];

      if (!level3) {
        // Level 2 is terminal
        level2Node.resolution = resolution;
      } else {
        // Level 3 is terminal
        level2Node[level3] = { resolution };
      }
    }
  }

  return topics;
}


/**
 * Replaces the static 'topics' object with dynamic data loaded from the spreadsheet
 */
function getTopics() {
  return loadTemplatesFromSheet();
}

# 📬 Email Templating Web App  
*A lightweight, dynamic email assistant for support teams – built with Google Apps Script*

---

## ✨ Overview

This application provides a fast, intuitive interface for navigating and copying support email templates. It replaces the previous system built on large, complex spreadsheets and brings clarity and efficiency to everyday workflows for the **Customer Solutions Tech team** at my organization.

Built entirely with **Google Apps Script**, this tool is fully integrated into our internal Google Workspace environment, with **no external dependencies** and **no sensitive data handling**. Templates are dynamically loaded from a shared spreadsheet, meaning content updates can be made without needing to redeploy the app.

🔒 **Internal Only**  
✅ **No external API calls**  
🚫 **No user/client data is stored**  
✍️ **Fully editable by non-technical staff**

---

## 🚀 Live App

👉 [Click here to open the deployed app](https://script.google.com/macros/s/AKfycbzSvgpHD9JZAbaMpZs7SJHCLwS0q4CWyA4nkWeIIlGJi_-W4y_JmiJrc23Y67v6-U32FA/exec)

---

## 📌 Project Highlights

- **Type**: Google Apps Script Web App  
- **Goal**: Simplify and accelerate access to email templates for support agents  
- **UI**: Single-page app (`index.html`) with collapsible navigation and copy-ready content  
- **Data Source**: Templates loaded dynamically from Google Sheet (`email_templates`)  
- **Access**: Internal only, deployed within Google Workspace

---

## 🧠 Data Sources

### 1. `users` Sheet

- **Sheet name**: `users`  
- **Columns (no header):**
  1. Employee ID (e.g. `1001`)
  2. Full Name (e.g. `Doe, Jane`)
  3. Role (e.g. `Support Agent`)

- **Usage**:  
  Used during login to extract and store the agent’s **first name**, which is then inserted dynamically in email templates.

---

### 2. `email_templates` Sheet

- **Sheet name**: `email_templates`  
- **Columns (header row required):**

| Level 1 Topic | Level 2 Subtopic | Level 3 Case | Tasks (semicolon-separated) | Backend Note | Email Subject | Email Body |
|---------------|------------------|--------------|------------------------------|---------------|----------------|-------------|

- **Format**:
  - Each row defines a **resolution**
  - Tasks are stored in a single cell, separated by semicolons (`;`)
  - Hierarchy is built from topic columns automatically
  - The app uses a parser to convert this flat format into the expected nested structure

---

## 💻 Application Flow

1. **Login Screen**
   - Prompts for either EID or first name
   - If EID is matched, first name is extracted from the `users` sheet
   - First name is stored in session

2. **Template Interface**
   - Displays a collapsible list of topics, subtopics, and cases
   - Clicking a leaf node reveals:
     - ✅ A checklist of tasks (visual only)
     - 📝 Copy-ready backend note
     - 📨 Copy-ready subject line
     - ✍️ Editable email body with pre-filled `{{agent_name}}`

---

## 🧩 Placeholder Handling

- `{{agent_name}}`: Automatically replaced with agent’s name from session  
- `xXSomethingXx`: Bolded placeholder shown to prompt manual edit (not auto-replaced)

---

## 🎨 Interface Design

- Lightweight inline CSS (no frameworks or external stylesheets)
- Clean, responsive layout with:
  - Collapsible tree view
  - Copy-to-clipboard buttons
  - Smooth animations when all tasks are checked
- Modal-based `About` section accessible via “?” icon

---

## ⚙️ Technical Notes

- Uses `navigator.clipboard.writeText` (with fallback in comments)
- Loads template data on each app run — **no redeploy needed for updates**
- Fully compatible with modern browsers under Google Workspace

---

## 🧪 Optional Enhancements

- ✅ Scroll/expand to current resolution
- ✅ Visual feedback when all tasks are marked
- 🔄 Admin tool to preview changes before saving to sheet
- 💡 Template suggestion system (future AI enhancement?)

---

## 🧡 Acknowledgments

Built by Fabi (with some help from ChatGPT 😉)  
Maintained with love for the team.  

**Suggestions, improvements, or fixes?**  
Feel free to reach out! Let's make this even better together.

---

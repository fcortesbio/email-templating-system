# Google Apps ScriptEmail Templating Web App

---

## 📌 Project Overview

- **Type:** Google Apps Script Web App  
- **Purpose:** Help support agents find and copy email templates based on categorized topics.  
- **Access:** Internal use only. No external APIs or web access. Only Google Workspace services allowed.  

---

## 🧠 Data Structure

### 1. `users` Spreadsheet (bound to the Apps Script project)

- **Sheet name:** `users`  
- **Structure:** No header row  
- **Columns:**  
  1. Employee ID (numeric)  
  2. Full name (format: `Lastname, Firstname`)  
  3. Role (string; unused for now)  
- **Example row:**  
  `1000 | Cortes, Fabian | Support Agent`  

### 2. `topics` Object (in `templates.gs`)

- Stored as a hierarchical JavaScript object with **nested levels**.  
- A topic or subtopic that contains a `resolution` object is considered a terminal (leaf).  
- There is **no fixed depth**.  
- **Each `resolution` contains:**
  - `tasks`: array of strings  
  - `backend_note`: string  
  - `email_subject`: string  
  - `email_body`: string (may contain placeholders)  

---

## 💻 App Flow

### 1. `index.html`

- The web app consists of a single HTML page rendered by `doGet(e)` in `Code.gs`.  
- All content is **dynamically generated** based on session name.

### 2. Initial Screen (Login)

- Single text input is shown.  
- Accepts either:  
  - **EID** (numbers): Matches against the spreadsheet, retrieves **first name** only.  
  - **Name** (letters/spaces): First word only is kept.  
- Parsed name is stored in **browser session storage**.  
- If session has a valid name, show main app interface.  

---

## 📁 Template Viewer UI

### 1. Collapsible Menu

- Generated recursively from the `topics` object.  
- Menu depth matches object nesting.  
- Clicking a terminal node (with `resolution`) reveals its details.

### 2. Resolution Section

Displays the following when a resolution is selected:

- **Tasks**: Rendered as checkboxes (non-functional).  
- **Back-end note**: In a `<div>` with a copy button.  
- **Email subject**: In a `<div>` with a copy button.  
- **Email body**: In a **contenteditable div** with copy button.  

---

## 🧩 Placeholder Handling

### 1. Automatic Placeholders

- Only `{{agent_name}}` is supported.  
- Replaced by the stored session name when rendering the `email_body`.

### 2. Manual Placeholders

- Format: `xXSomethingXx`  
- **NOT** replaced automatically.  
- Should be **bolded** in the UI to prompt manual input.

---

## 🎨 UI Details

- Plain inline CSS, **no frameworks or external resources**.  
- Collapsible triangle indicators for expandable items.  
- Subtle animation or background change when **all tasks** are checked.

---

## 🛠 Technical Constraints

- Must use **Google Apps Script** exclusively.  
- No internet requests or external libraries.  
- Clipboard handled with `navigator.clipboard.writeText`.  
- Include fallback (`document.execCommand`) in comments.  
- All logic and data must be bundled in the single script project.

---

## ✅ Optional Enhancements

- Subtle visual cue when all checkboxes are marked.  
- Scroll or expand resolution when clicked in the menu.


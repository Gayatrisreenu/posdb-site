# POSB Banking App

A frontend banking UI prototype built with vanilla HTML, CSS, and JavaScript.

## Folder Structure

```
posb-banking-app/
├── index.html          ← Login page (entry point)
├── home.html           ← Home / Transaction History
├── dashboard.html      ← Pay & Transfer dashboard
├── transfer.html       ← Make a Transfer
├── recipients.html     ← Manage Recipients
├── history.html        ← Full Transaction History
├── css/
│   └── style.css       ← All styles
├── js/
│   └── app.js          ← Shared logic (auth, sidebar, data helpers)
└── assets/             ← Place logo.png and bg.png here (optional)
```

## How to Run in VS Code

### Option 1 — Live Server (Recommended)
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **"Open with Live Server"**
3. Browser opens at `http://127.0.0.1:5500/index.html`

### Option 2 — Direct Browser Open
1. Just double-click `index.html` to open in your browser
   > Note: some browsers restrict localStorage on `file://` — use Live Server if data doesn't persist.

## Login
- Enter **any** User ID and PIN to log in (no validation)
- Demo data seeds automatically on first login

## Key Data (from Excel)
- **Balance**: SGD 163,000.83
- Transactions span Jan – Apr 2026 (March included)
- 3 Salary credits of SGD 18,320.00 (Feb, Mar, Apr)

## Notes
- All data is stored in **localStorage** (persists across page refreshes)
- Session is stored in **sessionStorage** (clears when browser tab closes)
- To reset demo data: open browser Console → type `localStorage.clear()` → refresh

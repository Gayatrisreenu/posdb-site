/* =========================================================
   POSB Banking App — app.js
   ========================================================= */

// ── Seed version — bump this any time data changes ───────
const SEED_VERSION = "v2-163k";

// ── Auto-seed on EVERY page load — fixes stale localStorage ──
(function(){
  if(localStorage.getItem("posb_seeded") !== SEED_VERSION){
    localStorage.clear();

    const txns = [
      // April 2026
      { id:1,  name:"JAPAN HOME (RETAIL)",   code:"POS",   desc:"NETS Contactless",                               debit:16.50,    credit:null,     date:"2026-04-26", icon:"shop"   },
      { id:2,  name:"BUS/MRT",               code:"UMC-S", desc:"BUS/MRT 836374684 SI SGP 13APR",                 debit:9.11,     credit:null,     date:"2026-04-22", icon:"smrt"   },
      { id:3,  name:"WIX.COM",               code:"UMC-S", desc:"WIX.COM 1235959041 SA USA 19APR USD20.71",       debit:27.25,    credit:null,     date:"2026-04-21", icon:"sub"    },
      { id:4,  name:"CAFE O SINGAPORE",      code:"UMC-S", desc:"CAFE O SINGAPORE P* OD SI SGP 17APR",            debit:13.80,    credit:null,     date:"2026-04-20", icon:"shop"   },
      { id:5,  name:"DAISO JAPAN-WOODLANDS", code:"UMC-S", desc:"DAISO JAPAN-WOODLANDS SI SGP 16APR",             debit:8.28,     credit:null,     date:"2026-04-20", icon:"shop"   },
      { id:6,  name:"NTUC FairPrice",        code:"UMC-S", desc:"NTUC FP-WLDS CIVIC PLZ SI SGP 16APR",            debit:40.61,    credit:null,     date:"2026-04-20", icon:"shop"   },
      { id:7,  name:"IndiGo Air",            code:"UMC-S", desc:"INDIGOAIR SINGAPORE SGP 16APR",                  debit:669.10,   credit:null,     date:"2026-04-20", icon:"ride"   },
      { id:8,  name:"Amazon Retail SG",      code:"UMC-S", desc:"AMAZON RETAIL SG SI SGP 14APR",                  debit:36.95,    credit:null,     date:"2026-04-17", icon:"shop"   },
      { id:9,  name:"GoDaddy",               code:"UMC-S", desc:"DNH*GODADDY#4063070257 AM NLD 13APR",            debit:8.47,     credit:null,     date:"2026-04-17", icon:"sub"    },
      { id:10, name:"Amazon Marketplace SG", code:"UMC-S", desc:"AMAZON MKTPLC SG SI SGP 13APR (Refund)",         debit:null,     credit:37.16,    date:"2026-04-17", icon:"shop"   },
      { id:11, name:"Salary Credit",         code:"SAL",   desc:"Salary - Singapore Sports Business Co.",         debit:null,     credit:18320.00, date:"2026-04-10", icon:"salary" },
      // March 2026
      { id:12, name:"Grab",                  code:"UMC-S", desc:"Grab* A-95D84HLWXXDBAV Si SGP 29MAR",            debit:35.00,    credit:null,     date:"2026-03-31", icon:"ride"   },
      { id:13, name:"Paris Baguette",        code:"UMC-S", desc:"PARIS BAGUETTE -RC SI SGP 27MAR",                debit:28.40,    credit:null,     date:"2026-03-31", icon:"shop"   },
      { id:14, name:"XW Western Grill",      code:"UMC-S", desc:"XW WESTERN GRILL- RC SI SGP 27MAR",              debit:54.79,    credit:null,     date:"2026-03-30", icon:"shop"   },
      { id:15, name:"Sengkang Town Council", code:"IBG",   desc:"SENGKANGTOWNCOUNCIL SN-GDED-0000045319198",       debit:75.00,    credit:null,     date:"2026-03-30", icon:"util"   },
      { id:16, name:"ATM Cash Deposit",      code:"CAM",   desc:"35999004,BEDOK CTL BR A",                        debit:null,     credit:1000.00,  date:"2026-03-30", icon:"salary" },
      { id:17, name:"SINGTEL",               code:"D2P",   desc:"SINGTEL 20260329103844264 D2Pay",                 debit:200.68,   credit:null,     date:"2026-03-29", icon:"util"   },
      { id:18, name:"Grab",                  code:"UMC-S", desc:"Grab* A-955I7CRGXFV7AV Si SGP 27MAR",            debit:27.20,    credit:null,     date:"2026-03-28", icon:"ride"   },
      { id:19, name:"ATM Cash Deposit",      code:"CAM",   desc:"35999004,BEDOK CTL BR A",                        debit:null,     credit:1800.00,  date:"2026-03-27", icon:"salary" },
      { id:20, name:"Connoisseur Concerto",  code:"UMC-S", desc:"THE CONNOISSEUR CONCER SI SGP 22MAR",             debit:40.29,    credit:null,     date:"2026-03-25", icon:"shop"   },
      { id:21, name:"IRAS",                  code:"IBG",   desc:"IRAS 4260707A S8179827C",                        debit:13.60,    credit:null,     date:"2026-03-23", icon:"util"   },
      { id:22, name:"WIX.COM",               code:"UMC-S", desc:"WIX.COM 1230651821 SA USA 19MAR USD20.71",       debit:27.42,    credit:null,     date:"2026-03-20", icon:"sub"    },
      { id:23, name:"McDonald's",            code:"UMC-S", desc:"MCDONALD'S (BDML) SI SGP 17MAR",                 debit:25.10,    credit:null,     date:"2026-03-20", icon:"shop"   },
      { id:24, name:"NTUC FairPrice",        code:"UMC-S", desc:"FAIRPRICE FINEST - BED SI SGP 17MAR",             debit:41.68,    credit:null,     date:"2026-03-19", icon:"shop"   },
      { id:25, name:"Salary Credit",         code:"SAL",   desc:"Salary - Singapore Sports Business Co.",         debit:null,     credit:18320.00, date:"2026-03-10", icon:"salary" },
      { id:26, name:"ATM Cash Deposit",      code:"CAM",   desc:"35999004,IMM EBC 1",                             debit:null,     credit:2000.00,  date:"2026-03-13", icon:"salary" },
      { id:27, name:"PayNow Transfer",       code:"ICT",   desc:"PayNow Transfer 7704947 To: TEO SAU SIONG",      debit:1850.00,  credit:null,     date:"2026-03-13", icon:"shop"   },
      { id:28, name:"M&S - Vivo City",       code:"UMC-S", desc:"M & S - VIVO CITY SI SGP 08MAR",                 debit:57.80,    credit:null,     date:"2026-03-10", icon:"shop"   },
      { id:29, name:"ATM Cash Deposit",      code:"CAM",   desc:"35999004,BEDOK CTL BR B",                        debit:null,     credit:1900.00,  date:"2026-03-06", icon:"salary" },
      // February 2026
      { id:30, name:"PayNow to Kirthiga",    code:"ICT",   desc:"PayNow Transfer 7011269 To: KIRTHIGA",           debit:500.00,   credit:null,     date:"2026-02-28", icon:"shop"   },
      { id:31, name:"BUS/MRT",               code:"UMC-S", desc:"BUS/MRT 795424939 SI SGP 05FEB",                 debit:21.60,    credit:null,     date:"2026-02-13", icon:"smrt"   },
      { id:32, name:"Salary Credit",         code:"SAL",   desc:"Salary - Singapore Sports Business Co.",         debit:null,     credit:18320.00, date:"2026-02-10", icon:"salary" },
      { id:33, name:"Amazon",                code:"UMC-S", desc:"Online Shopping - AMZ7823",                      debit:36.95,    credit:null,     date:"2026-02-09", icon:"shop"   },
      { id:34, name:"Grab",                  code:"UMC-S", desc:"Ride-hailing service",                           debit:15.30,    credit:null,     date:"2026-02-07", icon:"ride"   },
      { id:35, name:"NTUC FairPrice",        code:"UMC-S", desc:"NTUC FP-WLDS CIVIC PLZ SI SGP 02FEB",            debit:70.89,    credit:null,     date:"2026-02-05", icon:"shop"   },
      { id:36, name:"IRAS",                  code:"IBG",   desc:"IRAS 4260707A S8179827C",                        debit:13.60,    credit:null,     date:"2026-02-05", icon:"util"   },
    ];

    const recipients = [
      { name:"Rajasekhar",           acc:"59119550665259",         bank:"INR, HDFC BANK",                type:"remit",  fav:false, created: Date.now()-1000 },
      { name:"Nuthi Hareesh",        acc:"012-7-027379",           bank:"DBS Savings Account",            type:"local",  fav:false, created: Date.now()-2000 },
      { name:"Kirthiga",             acc:"+65 91809054",           bank:"Mobile",                         type:"paynow", fav:true,  created: Date.now()-3000 },
      { name:"Ramesh-Tenant",        acc:"002-2-090043",           bank:"DBS Savings Plus Account",       type:"local",  fav:false, created: Date.now()-4000 },
      { name:"Canyon Bicycles GmbH", acc:"DE79600501017482379008", bank:"EUR, BADEN-WUERTT...",           type:"remit",  fav:false, created: Date.now()-5000 },
      { name:"Phani Tathineni",      acc:"291007472372",           bank:"USD, BANK OF AMERICA, N.A.",     type:"remit",  fav:true,  created: Date.now()-6000 },
      { name:"Kishan",               acc:"033-45008-7",            bank:"POSB Passbook Savings Account",  type:"local",  fav:false, created: Date.now()-7000 },
    ];

    localStorage.setItem("posb_transactions", JSON.stringify(txns));
    localStorage.setItem("posb_recipients",   JSON.stringify(recipients));
    localStorage.setItem("posb_balance",      "163000.83");
    localStorage.setItem("posb_seeded",       SEED_VERSION);
  }
})();

// ── Auth guard ───────────────────────────────────────────
function checkLogin(){
  if(sessionStorage.getItem("posb_login") !== "true"){
    window.location = "index.html";
  }
}

// ── Data accessors ───────────────────────────────────────
function getUser()         { return sessionStorage.getItem("posb_user") || localStorage.getItem("posb_user") || "Admin"; }
function getBalance()      { return parseFloat(localStorage.getItem("posb_balance") || "163000.83"); }
function getTransactions() { return JSON.parse(localStorage.getItem("posb_transactions") || "[]"); }
function getRecipients()   { return JSON.parse(localStorage.getItem("posb_recipients")   || "[]"); }

function saveTransactions(data) { localStorage.setItem("posb_transactions", JSON.stringify(data)); }
function saveRecipients(data)   { localStorage.setItem("posb_recipients",   JSON.stringify(data)); }
function saveBalance(val)       { localStorage.setItem("posb_balance",      String(val)); }

// ── Helpers ──────────────────────────────────────────────
function fmt(n){
  return parseFloat(n).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function initials(name){
  return name.split(" ").slice(0,2).map(w=>w[0]).join("").toUpperCase();
}

const AVATAR_COLORS = [
  "#e74c3c","#e67e22","#f39c12","#2ecc71","#1abc9c",
  "#3498db","#9b59b6","#e91e63","#00bcd4","#8bc34a"
];

function avatarColor(name){
  let h = 0;
  for(let i=0;i<name.length;i++) h = name.charCodeAt(i) + ((h<<5)-h);
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}

// ── Sidebar ──────────────────────────────────────────────
function buildSidebar(activePage){
  const nav = [
    { label:"Home",          href:"home.html",      icon:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
    { label:"Pay & Transfer",href:"dashboard.html", icon:'<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>' },
    { label:"Recipients",    href:"recipients.html",icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
    { label:"History",       href:"history.html",   icon:'<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>' },
    { label:"digiWealth",    href:"#",              icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>' },
    { label:"Apply",         href:"#",              icon:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>' },
  ];

  const el = document.getElementById("sidebar");
  if(!el) return;
  const user = getUser();

  el.innerHTML = `
    <div class="sidebar-logo" style="padding:16px 20px; display:flex; align-items:center; gap:10px;">
      <!-- Key icon matching real POSB app -->
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Key bow (top circles) -->
        <circle cx="38" cy="28" r="22" fill="white"/>
        <circle cx="38" cy="28" r="13" fill="#1a2332"/>
        <!-- Three holes in bow -->
        <circle cx="38" cy="16" r="5" fill="white"/>
        <circle cx="28" cy="33" r="5" fill="white"/>
        <circle cx="48" cy="33" r="5" fill="white"/>
        <!-- Key shaft -->
        <rect x="34" y="48" width="8" height="38" rx="3" fill="white"/>
        <!-- Key teeth -->
        <rect x="42" y="56" width="8" height="6" rx="2" fill="white"/>
        <rect x="42" y="68" width="8" height="6" rx="2" fill="white"/>
      </svg>
      <span style="font-size:22px; font-weight:800; color:#f0a500; letter-spacing:1px;">POSB</span>
    </div>
    <nav class="sidebar-nav">
      ${nav.map(n=>`
        <a class="nav-item${n.label===activePage?' active':''}" href="${n.href}">
          <span class="nav-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">${n.icon}</svg>
          </span>
          ${n.label}
        </a>
      `).join("")}
    </nav>
    <div class="sidebar-footer">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
        <div style="width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,0.15);
          display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;">
          ${initials(user)}
        </div>
        <span style="font-size:12px;color:rgba(255,255,255,0.5);">${user}</span>
      </div>
      <a href="index.html" onclick="logout(event)"
        style="font-size:11.5px;color:rgba(255,255,255,0.35);text-decoration:none;cursor:pointer;">
        Sign out
      </a>
    </div>
  `;
}

function logout(e){
  e.preventDefault();
  sessionStorage.removeItem("posb_login");
  sessionStorage.removeItem("posb_user");
  window.location = "index.html";
}

// ── Topbar ───────────────────────────────────────────────
function buildTopbar(title, subtitle=""){
  const el = document.getElementById("topbar");
  if(!el) return;
  const user = getUser();
  el.innerHTML = `
    <div class="topbar-title">${title}${subtitle?`<br><span style="font-size:12px;font-weight:400;opacity:0.75;">${subtitle}</span>`:""}</div>
    <div class="topbar-actions">
      <div class="topbar-icon-btn" title="Messages">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </div>
      <div class="avatar-btn" onclick="window.location='index.html'">
        <div class="avatar-circle">${initials(user)}</div>
        <span>${user.split(" ")[0].substring(0,2).toUpperCase()}</span>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
          stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </div>
  `;
}

// ── Footer ───────────────────────────────────────────────
function buildFooter(){
  const el = document.getElementById("pageFooter");
  if(!el) return;
  const now = new Date();
  const opts = { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit', hour12:false };
  el.textContent = "As of " + now.toLocaleString('en-SG', opts).replace(',','') + " SGT";
}

// ── Toast ────────────────────────────────────────────────
function showToast(msg, type=""){
  let t = document.getElementById("toast");
  if(!t){ t = document.createElement("div"); t.id="toast"; t.className="toast"; document.body.appendChild(t); }
  t.textContent = msg;
  t.className = "toast show" + (type ? " "+type : "");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=>{ t.className="toast"; }, 2800);
}

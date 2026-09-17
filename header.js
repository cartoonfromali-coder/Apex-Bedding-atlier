document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <header class="site-header">
      <div class="header-inner">
        <a href="index.html" class="brand-logo">Apex <span>Bedding</span></a>
        <nav class="header-nav desktop-nav">
          <a href="divan-beds.html">Divan Beds</a>
          <a href="padded-beds.html">Padded Beds</a>
          <a href="ottoman-beds.html">Ottoman Beds</a>
          <a href="mattresses.html">Mattresses</a>
          <a href="kids-beds.html">Kids Beds</a>
          <a href="bed-accessories.html">Accessories</a>
          <a href="#custom-bed-builder.html" class="highlight-btn">Build Custom Bed</a>
        </nav>
        <button class="mobile-menu-btn" type="button" aria-label="Open navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav class="mobile-nav">
        <div class="mobile-nav-title">Atelier Collection</div>
        <a href="divan-beds.html">Divan Beds</a>
        <a href="padded-beds.html">Padded Beds</a>
        <a href="ottoman-beds.html">Ottoman Beds</a>
        <a href="mattresses.html">Mattresses</a>
        <a href="kids-beds.html">Kids Beds</a>
        <a href="bed-accessories.html">Accessories</a>
        <a href="custom-bed-builder.html" class="mobile-vault-btn">Build Custom Bed</a>
      </nav>
    </header>
  `;
  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  const headerCSS = document.createElement("style");
  headerCSS.textContent = `
    .site-header{ position:sticky; top:0; z-index:9999; width:100%; background:rgba(10,10,10,.96); backdrop-filter:blur(14px); border-bottom:1px solid rgba(255,255,255,.1); }
    .header-inner{ width:100%; max-width:1180px; height:72px; margin:0 auto; padding:0 24px; display:flex; align-items:center; justify-content:space-between; }
    .brand-logo{ font-family:'Cormorant Garamond',Georgia,serif; font-size:27px; font-weight:700; letter-spacing:1px; color:#fff; text-decoration:none; text-transform:uppercase; }
    .brand-logo span{ color:#f59e0b; font-style:italic; }
    .header-nav{ display:flex; align-items:center; gap:21px; font-family:'Inter',sans-serif; font-size:12.5px; font-weight:500; }
    .header-nav a{ color:#d1d5db; text-decoration:none; white-space:nowrap; transition:color .2s; }
    .header-nav a:hover{ color:#f59e0b; }
    .header-nav .highlight-btn{ background:#f59e0b; color:#fff; padding:9px 16px; border-radius:6px; font-weight:600; }
    .header-nav .highlight-btn:hover{ background:#10b981; color:#fff; }
    .mobile-menu-btn{ display:none; width:42px; height:42px; border:1px solid rgba(255,255,255,.15); border-radius:7px; background:#171717; cursor:pointer; align-items:center; justify-content:center; flex-direction:column; gap:5px; position:relative; z-index:10002; }
    .mobile-menu-btn span{ display:block; width:18px; height:1.5px; background:#f59e0b; transition:transform .25s, opacity .2s; }
    .mobile-nav{ display:block; position:fixed; top:0; right:0; width:50vw; max-width:330px; min-width:250px; height:100vh; padding:88px 25px 30px; background:#171717; border-left:1px solid rgba(255,255,255,.1); box-shadow:-12px 0 35px rgba(0,0,0,.5); overflow-y:auto; transform:translateX(100%); transition:transform .28s cubic-bezier(.4,0,.2,1); z-index:10000; }
    .site-header.menu-open .mobile-nav{ transform:translateX(0); }
    .mobile-nav-title{ margin-bottom:18px; color:##f59e0b; font-family:'Cormorant Garamond',serif; font-size:23px; font-weight:600; border-bottom:1px solid rgba(255,255,255,.1); padding-bottom:13px; }
    .mobile-nav a{ display:block; padding:13px 0; border-bottom:1px solid rgba(255,255,255,.05); color:#d1d5db; font-family:'Inter',sans-serif; font-size:13px; font-weight:500; text-decoration:none; transition:color .2s, padding-left .2s; }
    .mobile-nav a:hover{ color:#f59e0b; padding-left:4px; }
    .mobile-nav .mobile-vault-btn{ margin-top:22px; padding:12px 15px; border-radius:6px; background:#059669; color:#fff; font-weight:600; text-align:center; display:block; text-decoration:none; }
    .site-header.menu-open .mobile-menu-btn span:nth-child(1){ transform:translateY(6.5px) rotate(45deg); }
    .site-header.menu-open .mobile-menu-btn span:nth-child(2){ opacity:0; }
    .site-header.menu-open .mobile-menu-btn span:nth-child(3){ transform:translateY(-6.5px) rotate(-45deg); }
    @media(max-width:760px){ .header-inner{ height:66px; padding:0 16px; } .brand-logo{ font-size:24px; } .desktop-nav{ display:none; } .mobile-menu-btn{ display:flex; } }
    @media(min-width:761px){ .mobile-nav{ display:none; } }
    @media(max-width:380px){ .mobile-nav{ width:72vw; min-width:0; } }
  `;
  document.head.appendChild(headerCSS);

  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".mobile-menu-btn");
  menuButton.addEventListener("click", function (e) {
    e.stopPropagation();
    const isOpen = header.classList.toggle("menu-open");
    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  document.addEventListener("click", function (e) {
    if (!header.classList.contains("menu-open")) return;
    if (!e.target.closest(".mobile-nav") && !e.target.closest(".mobile-menu-btn")) header.classList.remove("menu-open");
  });
  document.querySelectorAll(".mobile-nav a").forEach(l => l.addEventListener("click", () => header.classList.remove("menu-open")));
  document.addEventListener("keydown", e => { if(e.key === "Escape") header.classList.remove("menu-open"); });
});

if (!document.querySelector('link[data-ab-favicon]')) {
  const favicon = document.createElement('link');
  favicon.rel = 'icon'; favicon.type = 'image/svg+xml'; favicon.setAttribute('data-ab-favicon', 'true');
  favicon.href = 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="15" fill="#0A0A0A"/><text x="32" y="43" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="#059669">AB</text></svg>`);
  document.head.appendChild(favicon);
}

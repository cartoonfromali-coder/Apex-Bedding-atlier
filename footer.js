document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  if (document.getElementById("injected-footer-styles")) return;

  const footerCSS = `
    <style id="injected-footer-styles">
      .site-footer {
        width: 100%; max-width: none; margin: 60px 0 0; padding: 45px 22px 35px;
        text-align: center; font-family: 'Inter', system-ui, sans-serif;
        color: #9ca3af; background: #090a0f; border-top: 1px solid rgba(14, 165, 233, 0.3);
        box-sizing: border-box; display: block;
      }
      .site-footer, .site-footer * { box-sizing: border-box; }
      .site-footer .footer-brand {
        display: inline-block; font-size: 20px; font-weight: 800; letter-spacing: 1.5px;
        color: #ffffff; text-decoration: none; margin-bottom: 18px; text-transform: uppercase;
      }
      .site-footer .footer-brand span { color: #f59e0b; }
      .site-footer .footer-links {
        width: 100%; max-width: 920px; display: flex; justify-content: center;
        align-items: center; flex-wrap: wrap; gap: 14px 24px; margin: 0 auto 22px;
      }
      .site-footer .footer-links a {
        color: #9ca3af; text-decoration: none; font-size: 12.5px; font-weight: 500;
        transition: color 0.2s ease;
      }
      .site-footer .footer-links a:hover { color: #f59e0b; }
      .site-footer .footer-links a.highlight-link { color: #f59e0b; font-weight: 600; }
      .site-footer > p:not(.disclaimer) {
        width: 100%; margin: 0 auto 12px; font-size: 12px; color: #e5e7eb; font-weight: 500;
      }
      .site-footer .disclaimer {
        width: 100%; max-width: 720px; margin: 12px auto 0; font-size: 11px;
        font-weight: 300; color: #6b7280; line-height: 1.65; text-align: center;
      }
      .site-footer .disclaimer a { color: #9ca3af; text-decoration: underline; }
      .site-footer .disclaimer a:hover { color: #f59e0b; }
      @media (max-width: 650px) {
        .site-footer { margin-top: 40px; padding: 32px 16px 24px; }
      }
    </style>
  `;

  document.head.insertAdjacentHTML("beforeend", footerCSS);
  document.body.insertAdjacentHTML("beforeend", `
    <footer class="site-footer">
      <a href="index.html" class="footer-brand">Base Apex <span>Bedding Atelier</span></a>
      <div class="footer-links">
       <a href="index.html">Home</a>
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="disclaimer.html">Disclaimer</a>
          <a href="terms-of-service.html">Terms of Service</a>
      </div>
      <p>&copy; ${currentYear} Base Apex Bedding Atelier. Precision Crafted Sleep Architecture. All rights reserved.</p>
      <p class="disclaimer">Base Apex engineers high-performance structural bases, reinforced gas-lift ottoman frames, and precision sleep systems. <a href="disclaimer.html">Disclaimer</a></p>
    </footer>
  `);
});

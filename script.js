/*
  NAMAN × YASH AI – Cyber City Access Gate
  Developers:
  Naman (@its_sketch_artist__)
  Yash  (@johan.9891x)

  Open Source | BYO API Key
*/

(function () {

  /* ================== STYLE INJECTION ================== */
  const style = document.createElement("style");
  style.innerHTML = `
    :root {
      --cyan: #00f6ff;
      --purple: #8b5cf6;
      --pink: #ff3cac;
      --green: #00ff9c;
    }

    body.ny-lock {
      overflow: hidden;
    }

    /* FULLSCREEN OVERLAY */
    .ny-overlay {
      position: fixed;
      inset: 0;
      z-index: 999999;
      display: flex;
      align-items: center;
      justify-content: center;
      background: radial-gradient(circle at top, #020617, #000);
      color: white;
    }

    /* CYBER GRID */
    .ny-overlay::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
      background-size: 40px 40px;
      pointer-events: none;
      mask-image: radial-gradient(circle at center, black 25%, transparent 70%);
    }

    /* GLASS PANEL */
    .ny-panel {
      position: relative;
      width: min(92%, 430px);
      padding: 26px;
      border-radius: 18px;
      backdrop-filter: blur(18px);
      background: linear-gradient(
        180deg,
        rgba(255,255,255,0.08),
        rgba(255,255,255,0.02)
      );
      border: 1px solid rgba(255,255,255,0.15);
      box-shadow:
        0 0 30px rgba(0,246,255,0.28),
        0 0 70px rgba(139,92,246,0.28);
      animation: nyFade 0.9s ease forwards;
    }

    @keyframes nyFade {
      from { opacity: 0; transform: translateY(20px) scale(0.96); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    /* RGB TITLE */
    .ny-title {
      background: linear-gradient(
        120deg,
        var(--cyan),
        var(--purple),
        var(--pink),
        var(--green)
      );
      background-size: 400% 400%;
      animation: rgbFlow 8s ease infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.6rem;
      font-weight: 800;
      text-align: center;
      letter-spacing: 1px;
    }

    @keyframes rgbFlow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .ny-sub {
      text-align: center;
      font-size: 0.85rem;
      opacity: 0.7;
      margin-top: 6px;
    }

    .ny-dev {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.12);
      padding: 12px;
      border-radius: 12px;
      margin-top: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.85rem;
    }

    .ny-dev a {
      color: var(--cyan);
      text-decoration: none;
      font-weight: 600;
    }

    .ny-check {
      margin-top: 16px;
      display: flex;
      gap: 8px;
      font-size: 0.8rem;
      opacity: 0.8;
      cursor: pointer;
    }

    .ny-btn {
      margin-top: 18px;
      width: 100%;
      padding: 14px;
      border-radius: 14px;
      font-weight: 700;
      border: none;
      cursor: pointer;
      background: linear-gradient(
        120deg,
        var(--cyan),
        var(--purple),
        var(--pink)
      );
      background-size: 300% 300%;
      animation: rgbFlow 6s ease infinite;
      color: black;
      opacity: 0.35;
      pointer-events: none;
      transition: all 0.3s ease;
    }

    .ny-btn.active {
      opacity: 1;
      pointer-events: auto;
      box-shadow:
        0 0 20px rgba(0,246,255,0.5),
        0 0 60px rgba(255,60,172,0.35);
    }
  `;
  document.head.appendChild(style);

  /* ================== ALREADY UNLOCKED ================== */
  if (localStorage.getItem("naman_yash_ai_access") === "granted") {
    return;
  }

  document.body.classList.add("ny-lock");

  /* ================== BUILD OVERLAY ================== */
  const overlay = document.createElement("div");
  overlay.className = "ny-overlay";

  overlay.innerHTML = `
    <div class="ny-panel">
      <div class="ny-title">NAMAN × YASH AI</div>
      <div class="ny-sub">Cyber City Access Gate</div>

      <div class="ny-dev">
        <span>Naman</span>
        <a href="https://www.instagram.com/its_sketch_artist__" target="_blank">Follow</a>
      </div>

      <div class="ny-dev">
        <span>Yash</span>
        <a href="https://www.instagram.com/johan.9891x" target="_blank">Follow</a>
      </div>

      <label class="ny-check">
        <input type="checkbox">
        I followed both developers
      </label>

      <button class="ny-btn">Unlock AI</button>
    </div>
  `;

  document.body.appendChild(overlay);

  const checkbox = overlay.querySelector("input");
  const button = overlay.querySelector(".ny-btn");

  checkbox.addEventListener("change", () => {
    checkbox.checked
      ? button.classList.add("active")
      : button.classList.remove("active");
  });

  button.addEventListener("click", () => {
    localStorage.setItem("naman_yash_ai_access", "granted");
    overlay.style.opacity = "0";
    overlay.style.transform = "scale(0.95)";
    setTimeout(() => {
      overlay.remove();
      document.body.classList.remove("ny-lock");
    }, 450);
  });

  /* ================== CREDIT LOG ================== */
  console.log(
    "%cNAMAN × YASH AI\nCyber City Build\n\nDevelopers:\nNaman (@its_sketch_artist__)\nYash (@johan.9891x)",
    "color:#00f6ff;font-size:13px;font-weight:bold;"
  );

})();
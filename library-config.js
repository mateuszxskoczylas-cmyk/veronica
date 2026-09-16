// Lokalna konfiguracja biblioteki uzytkownika.
// Statusy: done = ukonczona, todo = do ukonczenia.
window.STEAM_HIDDEN_APPIDS = [271590, 739630, 1144200, 377160, 2101960, 2668510, 1259420];

// Wszystkie pozostale gry sa ukonczone (zielona nakladka).
// Gry ponizej sa do ukonczenia i maja czysta okladke bez kolorowej nakladki.
window.STEAM_STATUSES = Object.assign(window.STEAM_STATUSES || {}, {
  "582160": "todo",
  "2208920": "todo",
  "1086940": "todo",
  "1091500": "todo",
  "990080": "todo",
  "1245620": "todo",
  "2215430": "todo",
  "4354570": "todo",
  "2322010": "todo",
  "3240220": "todo",
  "920210": "todo",
  "1817070": "todo",
  "1817190": "todo",
  "2651280": "todo",
  "1174180": "todo",
  "2638890": "todo",
  "1196590": "todo",
  "1636440": "todo",
  "1888930": "todo",
  "2531310": "todo",
  "3558670": "todo",
  "1659420": "todo"
});

// Gry przed premiera pozostaja nieukonczone, ale wizualnie maja tylko czysta okladke.
// Po dacie premiery automatycznie pozostaja w statusie todo.
window.STEAM_RELEASE_DATES = {
  "1636440": "2026-09-24T04:00:00Z",
  "3558670": "2027-02-12T18:00:00Z",
  "4354570": "2027-04-08T14:00:00Z"
};

// Indywidualne podmiany coverow.
window.STEAM_COVERS = window.STEAM_COVERS || {};
window.STEAM_COVERS[393080] = "https://cdn2.steamgriddb.com/grid/a3116fcb0ff78581d441a3de68287e73.png";

// Gestosc kafelkow: na desktopie ok. 2x wiecej gier w jednym rzedzie.
(() => {
  const style = document.createElement("style");
  style.textContent = `
    @media (min-width: 1051px) {
      .grid {
        grid-template-columns: repeat(auto-fill, minmax(67px, 1fr));
        gap: 18px 9px;
      }
    }
    @media (min-width: 681px) and (max-width: 1050px) {
      .grid {
        grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
        gap: 16px 6px;
      }
    }
  `;
  document.head.appendChild(style);
})();

// Profil Steam uzywany w prawym gornym rogu.
(() => {
  const profileUrl = "https://steamcommunity.com/id/shinhati4/";
  const avatarUrl = "https://avatars.fastly.steamstatic.com/695c832b5e2b02942a76eff9c17af8d607d51879_full.jpg";

  function applySteamProfile() {
    const profile = document.querySelector(".profile");
    const link = profile?.closest("a");
    const avatar = document.getElementById("avatar");
    const fallback = document.getElementById("avatarFallback");

    if (link) link.href = profileUrl;
    if (fallback) fallback.textContent = "S";
    if (avatar) {
      if (avatar.getAttribute("src") !== avatarUrl) avatar.src = avatarUrl;
      avatar.hidden = false;
      if (fallback) fallback.hidden = true;
    }
  }

  applySteamProfile();
  requestAnimationFrame(applySteamProfile);
  setTimeout(applySteamProfile, 250);
  setTimeout(applySteamProfile, 1000);

  const avatar = document.getElementById("avatar");
  if (avatar) {
    new MutationObserver(() => {
      if (avatar.getAttribute("src") !== avatarUrl) applySteamProfile();
    }).observe(avatar, { attributes: true, attributeFilter: ["src"] });
  }
})();

// Prosty 4-cyfrowy PIN dostepowy. Po wpisaniu czwartej cyfry sprawdza sie automatycznie.
(() => {
  const PIN = "4444";

  const style = document.createElement("style");
  style.textContent = `
    #pinGate {
      position: fixed;
      inset: 0;
      z-index: 2147483647;
      display: grid;
      place-items: center;
      background:
        radial-gradient(760px 480px at 50% 54%, rgba(31, 54, 76, .46), transparent 64%),
        #0b1117;
      transition: opacity .22s ease, visibility .22s ease;
    }
    #pinGate.pin-ok {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
    .pin-digits {
      display: flex;
      gap: 12px;
    }
    .pin-digit {
      width: 58px;
      height: 68px;
      border: 1px solid rgba(255,255,255,.18);
      border-radius: 4px;
      outline: none;
      background: #182432;
      color: #fff;
      text-align: center;
      font: 700 27px/1 "Segoe UI", Arial, sans-serif;
      caret-color: transparent;
      box-shadow: 0 12px 26px rgba(0,0,0,.24);
      transition: border-color .15s ease, box-shadow .15s ease, transform .15s ease;
    }
    .pin-digit:focus {
      border-color: #66c0f4;
      box-shadow: 0 0 0 2px rgba(102,192,244,.16), 0 12px 26px rgba(0,0,0,.28);
      transform: translateY(-1px);
    }
    #pinGate.pin-error .pin-digit {
      border-color: #ff5f5f;
      animation: pinShake .24s linear;
    }
    @keyframes pinShake {
      0%,100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }
    @media (max-width: 520px) {
      .pin-digits { gap: 9px; }
      .pin-digit { width: 52px; height: 62px; font-size: 24px; }
    }
  `;
  document.head.appendChild(style);

  const gate = document.createElement("div");
  gate.id = "pinGate";
  gate.setAttribute("role", "dialog");
  gate.setAttribute("aria-modal", "true");
  gate.setAttribute("aria-label", "Wpisz 4-cyfrowy PIN");
  gate.innerHTML = `
    <div class="pin-digits" aria-label="PIN">
      <input class="pin-digit" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="1" autocomplete="off" aria-label="Cyfra 1">
      <input class="pin-digit" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="1" autocomplete="off" aria-label="Cyfra 2">
      <input class="pin-digit" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="1" autocomplete="off" aria-label="Cyfra 3">
      <input class="pin-digit" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="1" autocomplete="off" aria-label="Cyfra 4">
    </div>
  `;
  document.body.appendChild(gate);

  const inputs = [...gate.querySelectorAll(".pin-digit")];
  let checking = false;

  function enteredPin() {
    return inputs.map(input => input.value).join("");
  }

  function unlockIfReady() {
    if (checking || inputs.some(input => input.value.length !== 1)) return;
    checking = true;

    if (enteredPin() === PIN) {
      gate.classList.add("pin-ok");
      setTimeout(() => gate.remove(), 240);
      return;
    }

    gate.classList.add("pin-error");
    setTimeout(() => {
      inputs.forEach(input => { input.value = ""; });
      gate.classList.remove("pin-error");
      checking = false;
      inputs[0].focus();
    }, 330);
  }

  inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "").slice(-1);
      if (input.value && index < inputs.length - 1) inputs[index + 1].focus();
      unlockIfReady();
    });

    input.addEventListener("keydown", event => {
      if (event.key === "Backspace" && !input.value && index > 0) {
        inputs[index - 1].focus();
      }
      if (event.key.length === 1 && !/\d/.test(event.key)) event.preventDefault();
    });

    input.addEventListener("paste", event => {
      const digits = (event.clipboardData?.getData("text") || "").replace(/\D/g, "").slice(0, 4);
      if (!digits) return;
      event.preventDefault();
      digits.split("").forEach((digit, i) => {
        if (inputs[i]) inputs[i].value = digit;
      });
      inputs[Math.min(digits.length, 4) - 1]?.focus();
      unlockIfReady();
    });
  });

  requestAnimationFrame(() => inputs[0].focus());
})();

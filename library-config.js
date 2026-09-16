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

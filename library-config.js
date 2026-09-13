// Lokalna konfiguracja biblioteki uzytkownika.
// Statusy: done = ukonczona, todo = do ukonczenia.
window.STEAM_HIDDEN_APPIDS = [271590, 739630, 1144200, 377160, 2101960, 2668510];

window.STEAM_STATUSES = Object.assign(window.STEAM_STATUSES || {}, {
  "2638890": "todo",
  "990080": "todo",
  "1086940": "todo",
  "3240220": "todo",
  "1196590": "todo",
  "1636440": "todo",
  "3558670": "todo",
  "4354570": "todo"
});

// Do czasu oficjalnej premiery badge jest fioletowym zegarkiem.
// Po tej dacie status automatycznie przechodzi na zolty "do ukonczenia".
window.STEAM_RELEASE_DATES = {
  "1636440": "2026-09-24T04:00:00Z",
  "3558670": "2027-02-12T18:00:00Z",
  "4354570": "2027-04-08T14:00:00Z"
};

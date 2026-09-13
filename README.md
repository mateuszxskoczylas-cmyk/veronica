# SHINHATI // Steam Library

Pełnoekranowa biblioteka Steam inspirowana Steam Big Picture. Cały ekran jest biblioteką gier — bez pulpitu i bez udawania osobnego okna programu.

## Statusy gier

Statusy są zapisane wyłącznie w `games.js`:

- `status: "todo"` — gra jest po prostu w bibliotece
- `status: "done"` — gra ukończona
- `favorite: true` — ulubiona

Strona nie zapisuje statusów w `localStorage`, cookies ani cache przeglądarki.

## Widoki i sortowanie

Dostępne sekcje biblioteki:

- **Wszystkie gry**
- **Ukończone**
- **Ulubione**

Domyślne sortowanie to **nazwa A–Z**. Gry z `playtime: "-"` nie mają osobnej kategorii — są pokazywane razem z resztą biblioteki.

## Okładki

Strona próbuje pobierać pionowe grafiki `library_600x900.jpg` / `library_capsule.jpg` bezpośrednio z publicznych zasobów Steam na podstawie AppID.

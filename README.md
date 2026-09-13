# SHINHATI // Steam Library

Pełnoekranowa biblioteka Steam inspirowana Steam Big Picture. Nie ma pulpitu ani ramki udającej osobne okno programu — cała strona jest biblioteką gier.

## Statusy gier

Statusy są zapisane wyłącznie w `games.js`:

- `status: "todo"` — do zrobienia
- `status: "done"` — ukończona
- `favorite: true` — ulubiona

Strona nie zapisuje statusów w `localStorage`, cookies ani cache przeglądarki. Gry z `playtime: "-"` są automatycznie pokazywane jako **NADCHODZĄCE**.

## Okładki

Strona próbuje pobierać pionowe grafiki `library_600x900.jpg` / `library_capsule.jpg` bezpośrednio z publicznych zasobów Steam na podstawie AppID.

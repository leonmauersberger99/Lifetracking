# Logbuch – Einrichtung

## 1. Dateien hochladen (GitHub Pages)
1. Gehe auf https://github.com/new und lege ein neues, öffentliches Repository an (z. B. `logbuch`).
2. Lade `index.html`, `manifest.json` und `icon-512.png` in dieses Repository hoch (per "Add file" → "Upload files").
3. Gehe in den Repo-Einstellungen zu **Settings → Pages**, wähle als Branch `main` und Ordner `/ (root)`, dann **Save**.
4. Nach ca. 1–2 Minuten ist die App unter `https://DEIN-NUTZERNAME.github.io/logbuch/` erreichbar.

## 2. Google Cloud einrichten
1. Gehe auf https://console.cloud.google.com und lege ein neues Projekt an.
2. Unter **APIs & Dienste → Bibliothek**: "Google Calendar API" suchen und aktivieren.
3. Unter **APIs & Dienste → OAuth-Zustimmungsbildschirm**: Typ "Extern" wählen, App-Namen vergeben, dich selbst als Testnutzer eintragen.
4. Unter **APIs & Dienste → Anmeldedaten → Anmeldedaten erstellen → OAuth-Client-ID**:
   - Anwendungstyp: **Webanwendung**
   - Autorisierte JavaScript-Quellen: deine GitHub-Pages-Adresse aus Schritt 1 (z. B. `https://DEIN-NUTZERNAME.github.io`)
5. Die erzeugte Client-ID kopieren.

## 3. In der App verbinden
1. App öffnen, Tab "Wochenplan".
2. Client-ID einfügen → "Client-ID speichern".
3. "Mit Google verbinden" antippen und den Google-Login bestätigen.
4. Danach kann "Diese Woche synchronisieren" die Plan-Termine direkt im echten Google Kalender anlegen.

## Handy
Die Adresse aus Schritt 1 im Handy-Browser öffnen, dann "Zum Home-Bildschirm hinzufügen" (Safari/Chrome-Menü) – die App liegt danach mit eigenem Icon auf dem Startbildschirm.

# Informationen zum Projekt

Um den Server zu starten muss der folgende Befehl im Verzeichnis mit der `index.js` ausgeführt werden.
```
node index.js
```

## Installierte npm Pakete

Um alle erforderlichen Pakete zu installieren muss zuvor folgender Befehl ausgeführt werden.
```
npm ci
```

- nodemon (Neustart des Servers bei Änderungen)
- express (für Views)
- pug (Template Engine für Express)
- Browsersync (für Frontend Entwicklung)

## Dokumentation der Skripte

Der Code ist mittels [JSDoc](https://jsdoc.app/) dokumentiert. Um JSDoc zu installieren muss lediglich folgender Befehl ausgeführt werde.
```
npm install -g jsdoc
```
Führt man `jsdoc -r .` im root-Verzeichnis aus wird für alle JavaScript-Dateien eine HTML-Seite erstellt. In `./out/index.html` ist die Dokumentation zu finden.

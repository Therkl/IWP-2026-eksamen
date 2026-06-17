# 📑 VS Code Terminal & Node.js – Din Ultimative Snydeseddel

Den absolut vigtigste gyldne regel i terminalen er: **Du skal altid stå i den rigtige mappe (`cd`), før du kører din kommando.**

Herunder finder du præcis, hvordan du navigerer og starter alle dele af dit system.

---

## 🚀 1. Fuldstack-projekter (Backend & Server)
Disse projekter har typisk en `package.json` og en hovedfil (som `server.js` eller `app.js`), der starter en lokal server.

### 🔹 Dit P2 Eksamensprojekt (`p2`)
1. **Skift til mappen:**

    cd .\P2_Eksamensprojekt\p2

2. **Start projektet:**

    node server.js

*(Husk: Hvis du får en EPERM-fejl eller SQLite compiler-fejl efter at have flyttet mappen, skal du stoppe serveren og køre `npm rebuild` i mappen først).*

### 🔹 Lærenskode (`laerenskode`)
1. **Skift til mappen:**

    cd .\Eksamens_Relevant\laerenskode

2. **Start projektet:**

    node app.js

### 🔹 My Express App (Eksamenstræning)
1. **Skift til mappen:**

    cd .\Eksamens_Relevant\Examtraining\my-express-app

2. **Start projektet:**

    npm start

*(Bemærk: `npm start` beder Node om at kigge i din `package.json` for at finde start-scriptet. Hvis den kommando af en eller anden grund fejler, kan du altid tvinge den i gang med `node app.js`).*

---

## 🏃 2. Enkelte JavaScript-filer (Skoleopgaver / Test)
Dette er små, isolerede `.js`-filer (som dem fra dine lektioner), der bare skal køre en enkelt gang og spytte et resultat ud i terminalen. De kræver ikke en fuld server.

1. **Skift til undermappen (f.eks. lecture4):**

    cd .\Overfloedigt_Og_Livecoding\lecture4_Livefiler

2. **Kør filen direkte med Node:**

    node chessboard.js

*(Du skifter bare `chessboard.js` ud med navnet på præcis den fil, du vil teste).*

---

## 🌐 3. Rene Frontend-filer (`.html`)
Filer der ender på `.html` (f.eks. din `index.html` eller `dashboard.html` i `public`-mapperne) skal **ikke** startes i terminalen med Node. De skal vises i en almindelig internetbrowser.

**Den smarteste og nemmeste måde (Live Server):**
1. Gå ind i fanebladet **Extensions** i VS Code (menuen til venstre med de 4 firkanter).
2. Søg efter og installer udvidelsen der hedder **Live Server** (Kilde: [Live Server på VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)).
3. Åbn din HTML-fil i editoren (f.eks. `.\P2_Eksamensprojekt\p2\public\index.html`).
4. **Højreklik** hvor som helst midt inde i koden på din skærm.
5. Vælg **"Open with Live Server"**.

*Hvorfor er det så smart?* Din browser åbner automatisk siden for dig, og hver eneste gang du ændrer noget i din kode og trykker `Ctrl + S` for at gemme, genindlæser browseren lynhurtigt siden. Du behøver aldrig mere at trykke opdater manuelt!

---

## 🎓 4. Eksamens-Bonus: Hvad betyder kommandoerne?

Hvis censor eller vejleder spørger dig til eksamen, så husk denne korte oversigt:

* 🟢 **`node [filnavn.js]`**: Starter selve Node.js-motoren og udfører præcis den JavaScript-fil, du beder den om (uden for browseren).
* 📦 **`npm start` / `npm run dev`**: NPM er din pakke-manager. Disse kommandoer kører et foruddefineret script, som du (eller din underviser) har sat op inde i `package.json` filen.
* ⚡ **`npx`**: En smart tjeneste, der lader dig hente og *køre* et værktøj (som `npx create-react-app`) direkte fra nettet, uden at du skal installere det permanent på din maskine først.
* 🛑 **`Ctrl + C`**: Stop-knappen! Tryk altid denne tastekombination nede i terminalen for at lukke din nuværende kørende server, inden du starter en ny, ellers fortæller computeren dig, at porten (f.eks. `localhost:3000`) allerede er i brug.
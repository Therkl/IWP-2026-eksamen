/* ======================================================================
   FASE 1: IMPORT & OPSÆTNING AF SERVEREN (Backenden)
   Hvad: Her henter vi Express ind og gør serveren klar.
   Hvorfor: Node.js har ikke en indbygget webserver. Express er et "framework",
   der gør det nemt at håndtere HTTP requests og responses.
====================================================================== */
const express = require('express'); // Henter Express-biblioteket fra node_modules
const app = express();              // Opretter selve server-applikationen
const PORT = 3000;                  // Definerer hvilken port serveren skal køre på (localhost:3000)


/* ======================================================================
   FASE 2: MIDDLEWARE (De usynlige hjælpere)
   Hvad: Middleware er funktioner, der kører "i midten" af et request, 
   inden det når frem til vores routes.
====================================================================== */

// 1. FORBINDELSE TIL EJS (View Engine)
// Hvorfor: Gør at vi kan bruge logik (variabler, loops) inde i vores HTML.
// Snakker med: Mappen 'views'. Når vi senere skriver res.render('index'), 
// ved Express automatisk, at den skal lede efter 'views/index.ejs'.
app.set('view engine', 'ejs');

// 2. FORBINDELSE TIL CSS/JS (Statiske filer)
// Hvorfor: Beskytter serverens filer, men åbner et specifikt "vindue" for browseren.
// Snakker med: Vores <link> og <script> tags i EJS-filerne. 
// Uden denne linje ville vores EJS-filer ikke kunne hente style.css.
app.use(express.static('public'));

// 3. OVERSÆTTER TIL FORMULARER (Body Parser)
// Hvorfor: HTTP-protokollen sender formulardata som en lang, uforståelig tekststreng.
// Denne linje oversætter teksten til et pænt JavaScript-objekt (req.body).
// Snakker med: Alle <form method="POST"> på vores hjemmeside.
app.use(express.urlencoded({ extended: true }));


/* ======================================================================
   FASE 3: VORES DATALAG (Midlertidig database)
   Hvad: Lokale variabler gemt i serverens RAM-hukommelse.
   Hvorfor: Så længe serveren kører, kan alle vores routes læse og skrive til dem.
   (Bemærk til eksamen: Hvis vi genstarter serveren, nulstilles arrayet, fordi vi 
   ikke har en "rigtig" database som f.eks. MongoDB eller SQL tilsluttet).
====================================================================== */
const teknologier = ["HTML", "CSS", "JavaScript", "Node.js", "Express", "EJS"];
const sidetitel = "Min Eksamens-applikation";


/* ======================================================================
   FASE 4: ROUTES (Trafikbetjentene)
   Hvad: Styrer hvad der sker, når en bruger besøger en bestemt URL.
====================================================================== */

// -- ROUTE 1: FORSIDEN (GET) --
// Snakker med: Brugerens browser, når de taster http://localhost:3000/
app.get('/', (req, res) => {
    // res.render() aktiverer EJS-skrivemaskinen.
    // 1. parameter: 'index' (navnet på EJS filen)
    // 2. parameter: Et objekt { ... } med den data, der sendes ind i filen.
    res.render('index', { 
        title: sidetitel, 
        techArray: teknologier // Arrayet sendes over, så EJS kan lave sit forEach-loop
    }); 
});

// -- ROUTE 2: UNDERSIDEN (GET) --
// Snakker med: Linket <a href="/nyside"> i vores index.ejs fil.
app.get('/nyside', (req, res) => {
    // Viser den nye side og overskriver 'title' variablen med en ny tekst specifikt til denne side
    res.render('nyside', { 
        title: "Detaljer om projektet" 
    });
});

// -- ROUTE 3: TILFØJ DATA (POST) --
// Snakker med: Vores <form action="/tilfoej" method="POST"> i index.ejs
app.post('/tilfoej', (req, res) => {
    // req.body er det oversatte objekt fra vores middleware.
    // .nyTeknologi svarer PRÆCIS til name="nyTeknologi" på vores <input> tag.
    const nyTech = req.body.nyTeknologi; 
    
    // Simpel validering: Sikrer at brugeren ikke har sendt et tomt felt
    if (nyTech) {
        teknologier.push(nyTech); // Skubber den nye tekst ind i vores globale array
    }
    
    // Eksamenstrick: Vi bruger "Post/Redirect/Get" mønsteret.
    // Efter vi har gemt data, beder vi browseren anmode om forsiden ('/') på ny.
    // Det opdaterer siden og forhindrer, at brugeren sender samme data to gange ved en fejl.
    res.redirect('/');
});


/* ======================================================================
   FASE 5: START SERVEREN
   Hvad: Aktiverer serveren, så den sidder og "lytter" efter indgående trafik.
====================================================================== */
app.listen(PORT, () => {
    console.log(`Serveren kører på http://localhost:${PORT}`);
});
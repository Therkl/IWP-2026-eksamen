/* ======================================================================
   EKSAMENS-NOTE: KLIENTSIDE VS. SERVERSIDE
   Censor vil elske, hvis du starter med at sige: 
   "Dette script kører KUN i brugerens browser (Frontend). Det aner ikke, 
   at server.js eksisterer. Dets eneste job er at overvåge og ændre i 
   HTML'en (DOM'en), mens brugeren sidder med siden åben."
====================================================================== */

// 1. SIKKERHEDSTJEK (DOMContentLoaded)
// Hvad: Lytter efter, at browseren har downloadet og læst hele HTML-filen.
// Hvorfor: Hvis vi prøver at fange formularen via JavaScript, før HTML'en 
// er færdig med at bygge den, får vi en fejl (null).
document.addEventListener('DOMContentLoaded', () => {
    
    /* ======================================================================
       FASE 1: DOM MANIPULATION (Document Object Model)
       Hvad: Vi tager fat i de fysiske HTML-elementer fra index.ejs
       Hvem snakker de med: 'techInput' matcher id="techInput" på dit <input> tag.
       'form' fanger det første <form> tag, den kan finde på siden.
    ====================================================================== */
    const form = document.querySelector('form');
    const input = document.getElementById('techInput');
    
    // 2. OPRETTER ET NYT HTML-ELEMENT VIA KODE
    // Hvad: I stedet for at skrive fejlen direkte i HTML'en, bygger vi den med JS.
    const errorMsg = document.createElement('p');
    errorMsg.id = 'error-msg'; // Giver den et ID, så CSS'en kan finde den (display: none)
    errorMsg.textContent = 'Teknologien skal være mindst 2 bogstaver lang!';
    
    // Indsætter vores nye <p> tag i HTML'en (lige før input-feltet)
    form.insertBefore(errorMsg, input);


    /* ======================================================================
       FASE 2: EVENT LISTENERS (Overvågning af brugeren)
       Hvad: Vi sætter en "alarm" op, der ringer, når brugeren prøver at 
       indsende (submitte) formularen.
    ====================================================================== */
    form.addEventListener('submit', (event) => {
        
        // 3. LOGIK OG VALIDERING
        // .trim() fjerner usynlige mellemrum før og efter teksten.
        // .length tæller hvor mange bogstaver, der er tilbage.
        if (input.value.trim().length < 2) {
            
            /* ======================================================================
               EKSAMENS-NOTE: DET MAGISKE KALD (event.preventDefault)
               Dette er den vigtigste linje i filen! 
               Hvad: Stopper browserens standard-opførsel. 
               Hvem snakker den med: Når brugeren trykker 'Submit', vil browseren normalt 
               STRAKS pakke dataen og sende et POST-request til server.js (/tilfoej). 
               Denne linje blokerer den afsendelse! Vi siger "Stop, send IKKE pakken afsted!"
            ====================================================================== */
            event.preventDefault(); 
            
            // 4. VISUEL FEEDBACK (Ændrer CSS via JS)
            // Fordi vi stoppede afsendelsen, bliver vi på siden. 
            // Nu gør vi fejlbeskeden synlig og inputfeltet rødt, så brugeren forstår fejlen.
            errorMsg.style.display = 'block'; 
            input.style.borderColor = 'red'; 
        }
        
        // Eksamens-note: Hvis ordet ER 2 bogstaver eller længere, rammer koden aldrig 
        // if-blokken. Så kører formularen bare helt normalt, og browseren sender  
        // sit POST-request afsted til din server.js!
    });
});
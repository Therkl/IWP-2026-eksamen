# How to Start a Local Server with npx serve

## Why do I need a local server?
When you open an HTML file directly in the browser (file://...), JavaScript's `fetch()` function doesn't work.
A local server lets your browser load the files properly via `http://localhost` so everything works correctly.

---

## Step 1 — Open the Terminal
In VS Code press **Ctrl + shift + æ ** (backtick) to open the terminal,
or go to **Terminal → New Terminal** in the top menu.

---

## Step 2 — Navigate to your project folder
Type `cd` followed by the path to your project folder:
```
cd C:\Users\claus\JS-html-css-programering\lecture4\examtraining\Restaurant
```

**Tips:**
- You can type `cd ` and then drag your folder into the terminal to auto-fill the path
- Press **Tab** to autocomplete folder names

---

## Step 3 — Confirm you are in the right folder
Type `ls` to list the files:
```
ls
```
You should see your project files listed:
```
index.html  script.js  style.css  pizza.png  specials/
```
If you don't see `index.html` you are in the wrong folder — go back to Step 2.

---

## Step 4 — Start the server
```
npx serve
```
It will show something like:
```
Serving!
- Local: http://localhost:3000
```

---

## Step 5 — Open the website
Open your browser and type this in the address bar:
```
http://localhost:3000
```
**Always use this URL instead of the browser back button to avoid broken links!**

---

## Step 6 — Stop the server
When you are done, go back to the terminal and press **Ctrl + C** to stop the server.

---

## Common mistakes to avoid
- ❌ Don't run `npx serve` from inside the `specials/` folder — always run it from the root project folder
- ❌ Don't use the browser back button — use the "← Back to Menu" link on each page
- ❌ Don't open `index.html` directly by double clicking — always go through `http://localhost:3000`

---

## Every time you work on the project:
1. Open terminal in VS Code
2. `cd` into your project folder
3. Run `npx serve`
4. Open `http://localhost:3000` in the browser

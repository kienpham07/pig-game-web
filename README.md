# Pig Game 🎲

A simple browser-based two-player dice game implemented with HTML, CSS, and JavaScript DOM.

## ✅ Features

- Two-player turn-based gameplay
- Roll a dice and accumulate a _current_ score for your turn
- If you roll a 1, you lose the current turn score and the turn passes
- "Hold" action banks the current score to the total score
- "New Game" to reset scores and start over
- Minimal, responsive UI using `index.html`, `style.css`, and `script.js`

## ▶️ How to play

1. Open `index.html` in a browser or simply click on the link: pig-game-web.vercel.app
2. Player 1 clicks **Roll Dice** to roll. The roll value adds to their _current_ score.
3. If the dice shows **1**, the player's current score is lost and the turn passes to the other player.
4. Player can click **Hold** to add the current score to their total score and pass the turn.
5. First player to reach the target score (default **100**) wins the game.

> Tip: You can change the target score or tweak behavior by editing `script.js`.

## 📁 Project files

- `index.html` — the HTML layout and buttons
- `style.css` — styles for layout and visuals
- `script.js` — game logic and event handlers
- `favicon/` — PWA manifest and icons

## 🔧 Run locally

- No build step required — simply open `index.html` in your browser or click on the link: pig-game-web.vercel.app

## 💡 Customization

- Adjust the winning score in `script.js` (search for the target/winning score constant or a UI input) if you want faster/longer games.
- Style the UI in `style.css` to change colors or layout.

## ⚖️ License

MIT License — feel free to reuse and adapt.

# Creator: Kien Pham

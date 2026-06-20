# Typing Speed Test 🚀

A modern and responsive typing speed trainer built with pure JavaScript (Vanilla JS), HTML5, and CSS3. The project was developed as a practical exercise in dynamic DOM manipulation, working with timers, and building responsive layouts for complex interfaces.

# ✨ Project Features

* **Three Difficulty Levels (Easy, Medium, Hard):** Each level offers a unique set of texts - from simple short phrases to complex technical texts with special characters, mathematical formulas, and terminal commands.
* **Two Training Modes:**
    * `Timed (60s)` - a classic time test with dynamic timer color changes (green ➔ yellow ➔ red) as the deadline approaches.
    * `NonStop` - an endless mode for continuous practice, where new texts load smoothly and infinitely one after another in real-time.
* **Instant Analytics:** Accurate calculation of speed (WPM - words per minute) and accuracy metrics right while you type.
* **High Score Saving:** Integration with the browser's local storage (`localStorage`) allows saving and displaying your best result (`Personal Best`) even after refreshing the page.
* **Interactive UI:** * Dynamic wrapping of each letter of the text in `<span>` tags via `DocumentFragment` for character-by-character highlighting (green for correct keys, red with an underline for mistakes).
    * A pulsing custom cursor to indicate the current typing position.
    * Separate stylized screens for displaying results: showing the basic result or an impressive celebration of a new record with confetti.
* **Mobile Adaptation (Mobile-First Thinking):** * For smartphone screens, bulky control buttons are elegantly replaced with native `<select>` dropdown lists.
    * An integrated hidden `<input>` for seamlessly bringing up the virtual keyboard when tapping on the text area on mobile devices.

## 🛠️ Tech Stack

* **HTML5** - Semantic markup, use of document fragments for performance optimization.
* **CSS3** - Custom Properties (variables for quick theme changes), Flexbox for aligning status bars, CSS animations (`@keyframes`), custom stylized scrollbar.
* **JavaScript (ES6+)** - Keyboard event handling, interval timers (`setInterval`), element class management, working with built-in browser storage.

## 📂 Project Structure

```text
├── index.html       # Main application markup and screen structures
├── styles.css       # Main interface styles, animations, and media queries
├── reset.css        # Resetting basic browser styles for cross-browser compatibility
├── main.js          # Application logic, metric calculations, and input handling
└── assets/          # Graphic resources (logos, icons, patterns)

💡 How to use this file:
1. In the root of your project folder, create a file named README.md (if it doesn't exist yet).
2. Copy all the text from the block above and paste it there.
3. Save the file.
4. Run git add ., git commit -m "docs: add comprehensive README", and git push origin main.

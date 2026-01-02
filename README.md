## 🧨 Minesweeper (Vanilla JavaScript)

A browser-based implementation of the classic Minesweeper game built using HTML, CSS, and JavaScript.
This project focuses on clean logic, DOM manipulation, and solid front-end fundamentals without relying on frameworks.

## 🎯 Project Goals

* Build a fully functional Minesweeper game from scratch
* Strengthen core JavaScript skills (logic, events, state management)
* Practice clean code structure and project organization
* Create a polished, resume-ready front-end project

## 🕹️ Features

* Click to reveal tiles
* Right-click to flag suspected mines
* Automatic reveal of adjacent empty cells
* Game over detection (win / lose)
* Restart button
* Responsive layout for different screen sizes

Optional future features: timer, difficulty selection, animations, sound effects

## 🧠 Technologies Used

* HTML – structure and layout
* CSS – styling and layout design
* JavaScript (Vanilla) – game logic and interactivity
* No frameworks or libraries were used in this version
* 📂 Project Structure:

```
minesweeper/
│
├── index.html       # Main HTML file
├── style.css        # Styling
├── script.js        # Game logic
└── README.md        # Project documentation
```

## 🚀 How to Run the Project

1. Clone the repository:
2. git clone https://github.com/amoha123/minesweeper.git
3. Open the project folder:
4. cd minesweeper
5. Open index.html in your browser
    - (No server or setup required)

## 🧩 How the Game Works

* The board is generated dynamically using JavaScript.
* Mines are randomly placed when the game starts.
* Clicking a cell reveals:
* A mine → game over
* A number → number of adjacent mines
* An empty cell → recursively reveals neighboring cells
* Right-click to place or remove a flag.

## 📈 Future Improvements

* Difficulty levels (easy / medium / hard)
* Timer and move counter
* Mobile-friendly touch controls
* Animations and sound effects
* Rewrite using React + TypeScript (future version)

## 📌 Why This Project?

This project demonstrates:
* Understanding of core JavaScript concepts
* DOM manipulation and event handling
* Clean, readable code organization
* Ability to build a complete interactive app from scratch

## 📜 License

This project is open-source and available under the MIT License.
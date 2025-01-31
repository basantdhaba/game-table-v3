// gameLogic.js
let wallet = 500;

function showLoginForm() { /* ... (same as before) ... */ }
function hideLoginForm() { /* ... (same as before) ... */ }
function showWallet() { /* ... (same as before) ... */ }

document.getElementById('playButton').addEventListener('click', showLoginForm);
document.getElementById('singleButton').addEventListener('click', showLoginForm);
document.getElementById('pattiButton').addEventListener('click', showLoginForm);
document.getElementById('juriButton').addEventListener('click', showLoginForm);

document.getElementById('loginButton').addEventListener('click', () => { /* ... */ }); // Same as before
document.getElementById('addMoneyButton').addEventListener('click', () => { /* ... */ }); // Same as before


async function fetchData(game) {  // *** KEY CHANGE: Async function, error handling
    try {
        const response = await fetch(`/api/games/${game}`); // Replace with your API URL
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return []; // Return empty array on error
    }
}

function createRow(date, values) { /* ... (same as before) ... */ }

const gameTable = document.getElementById('gameTable');
const gameSelector = document.getElementById('gameSelector');

async function populateTable(selectedGame) { // *** KEY CHANGE: Async function
    gameTable.innerHTML = ''; // *** KEY CHANGE: Clear the table!

    const data = await fetchData(selectedGame); // *** KEY CHANGE: Fetch data

    if (data.length === 0) { // Handle no data case
        const message = document.createElement('p');
        message.textContent = "No data available for this game.";
        gameTable.appendChild(message);
        return; // Stop here if no data
    }

    data.forEach(entry => {
        const row = createRow(entry.date, entry.values);
        gameTable.appendChild(row);
    });
}

gameSelector.addEventListener('change', () => {
    populateTable(gameSelector.value);
});

populateTable(gameSelector.value); // Initial population

window.showLoginForm = showLoginForm; // Expose if needed
window.hideLoginForm = hideLoginForm;
window.showWallet = showWallet;
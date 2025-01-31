// gameLogic.js (or your preferred file name)

let wallet = 500; // Initialize wallet (you'll likely want to store this server-side later)

// Function to show the login form
function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
}

// Function to hide the login form
function hideLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
}

// Function to show the wallet information
function showWallet() {
    document.getElementById('walletContainer').style.display = 'flex';
    document.getElementById('walletDisplay').textContent = `Wallet: $${wallet}`;
}

// Event listeners for showing the login form (when Play, Single, Patti, or Juri are clicked)
document.getElementById('playButton').addEventListener('click', showLoginForm);
document.getElementById('singleButton').addEventListener('click', showLoginForm);
document.getElementById('pattiButton').addEventListener('click', showLoginForm);
document.getElementById('juriButton').addEventListener('click', showLoginForm);

// Event listener for the login button (currently just a placeholder - implement real login later)
document.getElementById('loginButton').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Login Successful!'); // Replace with actual login logic
        hideLoginForm();
        showWallet();
    } else {
        alert('Please enter valid credentials.');
    }
});

// Event listener for the "Add Money" button (currently just a placeholder)
document.getElementById('addMoneyButton').addEventListener('click', () => {
    const amount = prompt('Enter the amount to add:');
    if (amount && !isNaN(amount) && amount > 0) {
        wallet += parseFloat(amount);
        document.getElementById('walletDisplay').textContent = `Wallet: $${wallet}`;
        alert(`$${amount} added to your wallet.`);
    } else {
        alert('Invalid amount.');
    }
});


// Simulate fetching data (replace with actual API call later)
async function fetchData(game) {
    try {
        const response = await fetch(`/api/games/${game}`); // Replace with your API endpoint
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return []; // Return an empty array in case of error
    }
}

// Function to create a table row
function createRow(date, values) {
    const row = document.createElement('div');
    row.classList.add('row');

    const dateBox = document.createElement('div');
    dateBox.classList.add('date');
    dateBox.textContent = date;
    row.appendChild(dateBox);

    const baziResults = document.createElement('div');
    baziResults.classList.add('bazi-results');

    values.forEach(value => {
        const baziBox = document.createElement('div');
        baziBox.classList.add('bazi-box');
        baziBox.textContent = value;
        baziResults.appendChild(baziBox);
    });

    row.appendChild(baziResults);
    return row;
}

const gameTable = document.getElementById('gameTable');
const gameSelector = document.getElementById('gameSelector');

// Function to populate the table with data
async function populateTable(selectedGame) {
    gameTable.innerHTML = ''; // Clear table content

    const data = await fetchData(selectedGame);

    if (data.length === 0) {
        const message = document.createElement('p');
        message.textContent = "No data available for this game.";
        gameTable.appendChild(message);
        return;
    }

    data.forEach(entry => {
        const row = createRow(entry.date, entry.values);
        gameTable.appendChild(row);
    });
}

// Event listener for the game selector
gameSelector.addEventListener('change', () => {
    populateTable(gameSelector.value);
});

// Initial table population
populateTable(gameSelector.value);


// Expose functions if needed for other scripts
window.showLoginForm = showLoginForm; // Example: making showLoginForm globally available
window.hideLoginForm = hideLoginForm;
window.showWallet = showWallet;
// ... expose other functions as needed
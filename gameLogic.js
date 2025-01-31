// gameLogic.js
let wallet = 500;

// ... (showLoginForm, hideLoginForm, showWallet functions - same as before)

// ... (Event listeners for buttons - same as before)

// ... (fetchData function - same as before)

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
        const baziBox = document.
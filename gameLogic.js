// Calculate winnings
function calculateWinning(betAmount, multiplier) {
    return betAmount * multiplier;
}

// Calculate total bets
function calculateTotalBet(bets) {
    return bets.reduce((total, bet) => total + bet.amount, 0);
}

// Determine multiplier based on bet type
function getMultiplier(betType) {
    switch (betType) {
        case 'high': return 2.0;
        case 'medium': return 1.5;
        case 'low': return 1.2;
        default: return 1.0;
    }
}

// Handle bet calculation and display results
function handleBetCalculation() {
    const betAmount = parseFloat(document.getElementById('betAmount').value);
    const betType = document.getElementById('betType').value;
    const multiplier = getMultiplier(betType);
    const winnings = calculateWinning(betAmount, multiplier);

    document.getElementById('result').textContent = `Potential Winnings: $${winnings.toFixed(2)}`;
    addToTable(betAmount, betType, winnings);
}

// Update result table
function addToTable(betAmount, betType, winnings) {
    const table = document.getElementById('resultTable');
    const newRow = table.insertRow();
    newRow.innerHTML = `<td>${betAmount}</td><td>${betType}</td><td>${winnings.toFixed(2)}</td>`;
}

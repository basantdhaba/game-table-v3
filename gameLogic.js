document.addEventListener('DOMContentLoaded', () => {
    let wallet = 500;
    let isLoggedIn = false;

    function showWallet() {
        document.getElementById('walletContainer').style.display = 'flex';
        document.getElementById('walletDisplay').textContent = `Wallet: $${wallet}`;
    }

    function showLoginForm() {
        if (!isLoggedIn) {
            document.getElementById('loginForm').style.display = 'block';
        }
    }

    function hideLoginForm() {
        document.getElementById('loginForm').style.display = 'none';
    }

    document.getElementById('playButton').addEventListener('click', showLoginForm);
    document.getElementById('singleButton').addEventListener('click', showLoginForm);
    document.getElementById('pattiButton').addEventListener('click', showLoginForm);
    document.getElementById('juriButton').addEventListener('click', showLoginForm);

    document.getElementById('loginButton').addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            isLoggedIn = true;
            alert('Login Successful!');
            hideLoginForm();
            showWallet();
        } else {
            alert('Please enter valid credentials.');
        }
    });

    document.getElementById('addMoneyButton').addEventListener('click', () => {
        const amount = prompt('Enter the amount to add:');
        if (amount && !isNaN(amount) && amount > 0) {
            wallet += parseFloat(amount);
            document.getElementById('walletDisplay').textContent = `Wallet: $${wallet}`;
            alert(`$${amount} added to your wallet.`);
        } else {
            alert('Invalid amount.');
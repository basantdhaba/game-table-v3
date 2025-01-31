// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    let wallet = 500;
    let isLoggedIn = false;

    // ... (showWallet function - same as before)

    function showLoginForm() {
        if (!isLoggedIn) {
            document.getElementById('loginForm').style.display = 'block';
        }
    }

    function hideLoginForm() {
        document.getElementById('loginForm').style.display = 'none';
    }

    // ... (Event listeners for Play, Single, Patti, Juri buttons)

    // Event listener for the login button
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

    // ... (fetchData, createRow, populateTable functions - same as before)

    // Event listeners for Single, Patti, Juri buttons (Simulated functionality):
    document.getElementById('singleButton').addEventListener('click', () => {
        showLoginForm();
        if (isLoggedIn) {
            alert("Single button clicked (Simulated).");
        }
    });

    document.getElementById('pattiButton').addEventListener('click', () => {
        showLoginForm();
        if (isLoggedIn) {
            alert("Patti button clicked (Simulated).");
        }
    });

    document.getElementById('juriButton').addEventListener('click', () => {
        showLoginForm();
        if (isLoggedIn) {
            alert("Juri button clicked (Simulated).");
        }
    });

    document.getElementById('playButton').addEventListener('click', () => {
        showLoginForm();
        if (isLoggedIn) {
            alert("Play button clicked (Simulated).");
        }
    });
}); // End of DOMContentLoaded event listener
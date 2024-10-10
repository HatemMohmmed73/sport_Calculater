const loginForm = document.getElementById('login-form');
        const errorMessage = document.getElementById('error-message');
        const registerButton = document.getElementById('register-button');

        loginForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });

                if (response.ok) {
                    window.alert('Login successful');
                    window.location.href = 'dashboard.html'; // Redirect to dashboard
                } else {
                    errorMessage.textContent = 'Invalid credentials. Please try again.';
                    errorMessage.style.display = 'block';
                }
            } catch (error) {
                console.error('Error during login:', error);
            }
        });

        // Register button event
        registerButton.addEventListener('click', async function() {
            const username = prompt('Enter a username:');
            const password = prompt('Enter a password:');

            if (username && password) {
                try {
                    const response = await fetch('/register', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username, password })
                    });

                    if (response.ok) {
                        window.alert('User registered successfully!');
                    } else {
                        window.alert('Username already exists.');
                    }
                } catch (error) {
                    console.error('Error during registration:', error);
                }
            }
        });

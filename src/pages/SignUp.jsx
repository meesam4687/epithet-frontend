function SignUp() {
    if (window.localStorage.getItem("token")) {
        window.location.href = '/';
    }
    function callSignup() {
        try {
            let username = document.getElementById("username-epithet").value;
            let password = document.getElementById("password-epithet").value;

            if (!username || !password) {
                console.error('Username and password are required');
                return;
            }

            fetch('https://meesam4687-epithet.hf.space/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password
                }),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    fetch('https://meesam4687-epithet.hf.space/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ username, password }),
                    })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Login failed');
                            }
                            return response.json();
                        })
                        .then(data => {
                            if (data.status === 'ok') {
                                localStorage.setItem('token', data.token);
                                localStorage.setItem('username', username);
                                localStorage.setItem('password', password);
                                window.location.href = '/';
                            }
                            else {
                                console.error('Login failed:', data.message);
                            }
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
        catch (error) {
            console.error("Error in signup process:", error);
        }
    }
    return (
        <div className="login-root">
            <div className="loginBox">
                <h1>Sign Up</h1>
                <div className="loginForm">
                    <div className="inputField">
                        <input type="text" id="username-epithet" name="username-epithet-sup" placeholder="Username..." required />
                    </div>
                    <div className="inputField">
                        <input type="password" id="password-epithet" name="password-epithet-sup" placeholder="Password..." required />
                    </div>
                    <button className="clickable" type="submit" onClick={callSignup}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
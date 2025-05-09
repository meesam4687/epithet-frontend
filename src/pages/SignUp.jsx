function SignUp() {
    function callSignup() {
        try {
            let username = document.getElementById("username-epithet").value;
            let password = document.getElementById("password-epithet").value;
            
            if (!username || !password) {
                console.error('Username and password are required');
                return;
            }
            
            fetch('http://127.0.0.1:1010/signup', {
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
                console.log('Success:', data);
                // Login
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
        catch(error) {
            console.error("Error in signup process:", error);
        }
    }
    return (
        <div className="login-root">
            <div className="loginBox">
                <h1>Sign Up</h1>
                <div className="loginForm">
                    <div className="inputField">
                        <input type="text" id="username-epithet" name="username-epithet" placeholder="Username..." required />
                    </div>
                    <div className="inputField">
                        <input type="password" id="password-epithet" name="password-epithet" placeholder="Password..." required />
                    </div>
                    <button className="clickable" type="submit" onClick={callSignup}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
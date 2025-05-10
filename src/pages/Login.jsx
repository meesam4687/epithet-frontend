function Login() {
    if(localStorage.getItem('token')){
        window.location.href = '/';
    }
    function handleLogin() {
        const username = document.getElementById('username-epithet').value;
        const password = document.getElementById('password-epithet').value;

        fetch('http://127.0.0.1:1010/login', {
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
                if(data.status === 'ok'){
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('username', username);
                    localStorage.setItem('password', password);
                    window.location.href = '/';
                }
                else{
                    console.error('Login failed:', data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div className="login-root">
            <div className="loginBox">
                <h1>Login</h1>
                <div className="loginForm">
                    <div className="inputField">
                        <input type="text" id="username-epithet" name="username-epithet" placeholder="Username..." required />
                    </div>
                    <div className="inputField">
                        <input type="password" id="password-epithet" name="password-epithet" placeholder="Password..." required />
                    </div>
                    <button className="clickable" type="submit" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
import Lottie from "lottie-react";
import { useState } from "react";
import loadingAnimation from "../assets/loading.json";
import Toast from "../Toast";
function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    
    const LottieView = <Lottie className="loadingAnim" animationData={loadingAnimation} loop={true} />

    if(localStorage.getItem('token')){
        window.location.href = '/';
    }
    
    function handleLogin() {
        setIsLoading(true);
        let username = document.getElementById('username-epithet').value;
        let password = document.getElementById('password-epithet').value;

        if (!username || !password) {
                console.error('Username and password are required');
                setToastMessage("Username and password are required");
                setShowToast(true);
                setTimeout(() => setShowToast(false), 4000);
                setIsLoading(false);
                return;
        }
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
                if(data.status === 'ok'){
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('username', username);
                    localStorage.setItem('password', password);
                    window.location.href = '/';
                }
                else{
                    console.error('Login failed:', data.message);
                    setToastMessage("Failed to Login");
                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 4000);
                    setIsLoading(false);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setToastMessage("Failed to Login");
                setShowToast(true);
                setTimeout(() => setShowToast(false), 4000);
                setIsLoading(false);
            });
    }
    
    return (
        <div className="login-root">
                {showToast && <Toast className="toast" message={toastMessage} />}
            <div className="loginBox">
                <h1>Login</h1>
                <div className="loginForm">
                    <div className="inputField">
                        <input type="text" id="username-epithet" name="username-epithet" placeholder="Username..." required />
                    </div>
                    <div className="inputField">
                        <input type="password" id="password-epithet" name="password-epithet" placeholder="Password..." required />
                    </div>
                    <button 
                        className="clickable" 
                        type="submit" 
                        onClick={handleLogin}
                        disabled={isLoading}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        {isLoading ? LottieView : "Login"}
                    </button>
                    <div className="loginText">
                        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
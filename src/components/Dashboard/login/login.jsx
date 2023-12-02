import React, {useState} from "react";
import logo from '../../../img/maid1.jpg';
import 'font-awesome/css/font-awesome.min.css';
import "./login.css"
import { Link } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <section className="login-form-container">
            <div className="login-box">
                <div className="login-left">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="login-right">
                    <div className="welcome-text">
                        <h1>WELCOME</h1>
                        <p>Sign in to your account</p>
                    </div>
                    <form className="form-login" onSubmit={handleSubmit}>
                        <div className="input-login">
                            <div className="email">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email"/>
                            </div>
                            <div className="password">
                                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password"/>
                            </div>
                            <p class="description_fpw">
                                Forget your password?
                            </p>
                            <Link to="/">
                            <button>Sign In</button>
                            </Link>
                        </div>
                    </form>
                    <div className="line-with-text"><span>OR</span></div>
                    <div class="social-icons">
                        <div class="icon-box">
                            <i class="fa fa-google"></i>
                        </div>
                        <div class="icon-box">
                            <i class="fa fa-facebook"></i>
                        </div>
                        <div class="icon-box">
                            <i class="fa fa-apple"></i>
                        </div>
                    </div>
                    <div className="signup-link">
                        Don't have an account? <Link to="/Register">Sign up</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;
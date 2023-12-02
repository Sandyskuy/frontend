import React, {useState} from "react";
import logo from '../../../img/maid1.jpg';
import 'font-awesome/css/font-awesome.min.css';
import './login.css'
import { Link } from "react-router-dom";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

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
                    <div className="signup-text">
                        <h1>Sign Up</h1>
                    </div>
                    <form className="form-login" onSubmit={handleSubmit}>
                        <div className="input-login register">
                            <div className="name">
                                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" id="name" name="name"/>
                            </div>
                            <div className="email">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email"/>
                            </div>
                            <div className="password">
                                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password"/>
                            </div>
                            <div className="confpass">
                                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Confirm Password" id="confpass" name="confpass"/>
                            </div>
                            <button type="submit">Sign Up</button>
                        </div>
                    </form>
                    <div className="signin-link">
                        Already Have an Account? <Link to="/login"> Sign In</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;
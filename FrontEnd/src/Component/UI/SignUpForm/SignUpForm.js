import React, { useState } from 'react'
import '../LoginForm/LoginForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import Maker from '../../../assets/logo.svg'
import { Link, Route, useHistory } from 'react-router-dom';
import axios from 'axios'
const SignUpForm = () => {
    const [details, setDetails] = useState({name: "",email: "",password: ""});
    const history=useHistory();
    const handleSignUpClick = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/createAccount',details)
            .then(response => {
                if(response.data && response.data['message'] === "SignUp Successfull")
                {
                    alert('Account successfully created\nLogin to continue');
                }
                else
                {
                    alert(response.data['message']);
                }
            });
    }
    const handleSignInClick = () => history.push('/signIn');
    
    return (
        <div className="container">
        <div className="forms-container">
            <div className="signin-signup">
                <form className="sign-in-form">
                    <h2 className="title">Sign Up</h2>
                    <div className="input-field">
                        <FontAwesomeIcon icon={faUser} size="lg" className="FontAweSomeIcon" />
                        <input type="text" placeholder="Name" onChange={e => setDetails({...details,name: e.target.value})} value={details.name}/>
                    </div>
                    <div className="input-field">
                        <FontAwesomeIcon icon={faUser} size="lg" className="FontAweSomeIcon"/>
                        <input type="email" placeholder="Email" onChange={e => setDetails({...details,email: e.target.value})} value={details.email} />                        </div>
                    <div className="input-field">
                        <FontAwesomeIcon icon={faLock} size="lg" className="FontAweSomeIcon"/>
                        <input type="password" placeholder="Password" onChange={e => setDetails({...details,password: e.target.value})} value={details.password} />
                    </div>
                        <button  className="btn solid" onClick={handleSignUpClick}>SignUp </button>    
                </form>
            </div>
        </div>

        <div className="panels-container">
            <div className="panel left-panel">
                <div className="content">
                    <h1>Already a member?</h1>
                    <button className="btn transparent" onClick={handleSignInClick}>
                        Login
                    </button>
                </div>
                <img src={Maker} className="ImageSize"></img>
            </div>
        </div>
    </div>
    )
}

export default SignUpForm
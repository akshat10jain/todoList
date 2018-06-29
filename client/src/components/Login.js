import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './Login.css'
/*
A component for logging in with the inputted username and password.
*/
class Login extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            password: ''
        };

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.loginRequest = this.loginRequest.bind(this);
    }

    onUsernameChange(event) {
        this.setState({ username: event.target.value });
    }

    onPasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    loginRequest = async (e) => {
        e.preventDefault();
        const request = {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }

        // Toast if failed login, refresh to go to home page if login succeeded.
        fetch('/api/login/', request).then((response) => {
            if (response.status == 200) {
                setTimeout(window.location.reload(), 100);
            } else if (response.status == 401) {
                toast.error('Could not find inputted username and password.', { position: toast.POSITION.TOP_CENTER });
            }
        });
     }

    render() {
        return (
            <div>
                {/* <form onSubmit={this.loginRequest}>
                    <label>
                        Username:
                        <input type="text" value={this.state.username} onChange={this.onUsernameChange} /><br/>
                        Password:
                        <input type="password" value={this.state.password} onChange={this.onPasswordChange} /><br/>
                    </label>
                    <input type="submit" value="Login" />
                </form>
                <Link to='/register'>Sign Up Here! </Link>
                <ToastContainer /> */}

                <div className="wrapper">
             <form onSubmit={this.loginRequest}>
             <h1>Login</h1>
                 <div className="form-group">
                    <label className="control-label">Username</label>
                    <input type="text" value={this.state.username} placeholder="Enter Username" 
                    name="username" className="form-control" onChange={this.onUsernameChange} required/>

                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input type="password" value={this.state.password} placeholder="Enter password" 
                    name="password" className="form-control" onChange={this.onPasswordChange} required />

                </div>
                <div className={classnames('form-group', 'signupButtons')}>
                    <button className="btn btn-primary btn-lg" disabled={this.state.isLoading}>
                        Login
              </button>
                 </div>
                 <Link to='/register' className="regx">Sign Up Here! </Link>
                 </form>
                 </div>
            </div>
        );
    }
}

export default Login;
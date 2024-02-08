import React, { useState } from 'react'
import '../asset/style/pages/LoginPage.css'
import axios from 'axios'

function LoginPage() {
    const [page, setpage] = useState('login')
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')

    const login = () => {
        if (!username || !password) {
            alert('Please Fill The Feild')
        }
        axios.post().then((response) => {

        }).catch((error) => {

        })
    }

    const registartion = () => {
        if (!username || !password || !email) {
            alert('Please Fill The Feild')
        }
        axios.post().then((response) => {

        }).catch((error) => {

        })
    }

    const reset = () => {
        if (!username) {
            alert("Please Fill The Feild")
        }
        axios.post().then((response) => {

        }).catch((error) => {

        })  
    }
    const renderPage = () => {
        if (page === 'login') {
            return (
                <div className="form-container">
                    <h2>Login</h2>
                    <hr />
                    <form action="">
                        <div className="input-group">
                            <label htmlFor="">UserName/E-mail:-</label> <br />
                            <input type="text" name='username' value={username} onChange={(e) => setusername(e.target.value)} placeholder='E-mail' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Password:-</label> <br />
                            <input type="password" name='password' value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Password' />
                        </div>
                        <div className="reset-section">
                            <div className="remember">
                                <input type="checkbox" /> Remember me
                            </div>
                            <div className="reset-password">
                                <span onClick={() => setpage('reset')}>Reset Password ?</span>
                            </div>
                        </div>
                        <div className="input-group">
                            <button type='button' onClick={login}>login</button>
                        </div>
                        <div className="registration-section">
                            <p>
                                Don't have an account?
                                <span onClick={() => setpage('registration')}>
                                    Do Registration
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            )
        } else if (page === 'registration') {
            return (
                <div className="form-container">
                    <h2>Registration</h2>
                    <hr />
                    <form action="">
                        <div className="input-group">
                            <label htmlFor="">UserName</label> <br />
                            <input type="text" name='username' placeholder='UserName' value={username} onChange={(e) => setusername(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">E-mail:-</label> <br />
                            <input type="email" name='email' placeholder='E-mail' value={email} onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Password:-</label> <br />
                            <input type="password" name='password' placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <button type='button' onClick={registartion}>Registration</button>
                        </div>
                        <div className="registration-section">
                            <p>
                                Already have an account ?
                                <span onClick={() => setpage('login')}>
                                    Do Login
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            )
        } else if (page === 'reset') {
            return (
                <div className="form-container">
                    <h2>Reset Password</h2>
                    <hr />
                    <form action="">
                        <div className="input-group">
                            <label htmlFor="">UserName/E-mail</label> <br />
                            <input type="text" name='username' placeholder='E-mail' />
                        </div>
                        <div className="input-group">
                            <button type='button' onClick={reset}>Reset</button>
                        </div>
                        <div className="registration-section">
                            <span onClick={() => setpage('login')}>
                                Go back
                            </span>
                        </div>
                    </form>
                </div>
            )
        }
    }
    return (
        <>
            <div className="main-container">
                <div className="left-container">
                    <img src={require("../asset/images/2.avif")} alt="logo" />
                </div>
                <div className="right-container">
                    {renderPage()}
                </div>
            </div>
        </>
    )
}

export default LoginPage
import React, { useContext, useEffect, useState } from 'react'
import '../asset/style/pages/LoginPage.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Notify from '../Notify'
import { useDispatch, useSelector } from 'react-redux'
import { LoaderContext } from '../Context'
// import { LoginUser, RegisterUser } from '../redux/action/action'

function LoginPage() {

    const { setloader } = useContext(LoaderContext)

    const [page, setpage] = useState('login')
    const navigate = useNavigate()

    useEffect(() => {
        if (sessionStorage.getItem('toke')) navigate('/dashboard')
    })

    const onEnter = (e) => {
        if (e.key == 'Enter') {
            login();
        }
    }
    const [registerForm, setregisterForm] = useState({
        firstName: "",
        lastName: "",
        password: "",
        email: '',
        mobileNumber: '',
        confirmPassword: '',
        profileImage: ''
    })

    const handleChange = (name, value) => {
        setregisterForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const saveSession = (data) => {
        navigate('/dashboard')
        sessionStorage.setItem('toke', data?.toke)
        sessionStorage.setItem('username', data?.user?.firstName)
        sessionStorage.setItem('userid', data.user?._id)
        sessionStorage.setItem('useremail', data.user?.email)
    }

    // const login = () => {
    //     dispatch(LoginUser(registerForm))
    //     // saveSession(state)
    //     document.querySelector('form').reset()
    // }

    const login = () => {
        setloader(true)
        axios({
            method: 'post',
            url: 'https://dashboard-api-one.vercel.app/api/v1/login',
            data: {
                email: registerForm.email,
                password: registerForm.password
            }
        }).then((response) => {
            saveSession(response.data);
            Notify("success", `Welcome to Restro !`)
        }).catch((error) => {
            console.log(error);
            Notify("error", `${error?.response?.data}`)
        }).finally(()=>{
            setloader(false)
        })
        document.querySelector('form').reset()
    }

    // const registartion = () => {
    //     dispatch(RegisterUser(registerForm))
    //     saveSession(state)
    //     setpage('login')
    //     document.querySelector('form').reset()
    // }

    const registartion = () => {
        setloader(true)
        axios({
            method: 'post',
            url: 'https://dashboard-api-one.vercel.app/api/v1/register',
            data: registerForm
        }).then((response) => {
            saveSession(response.data);
            Notify("success", `Welcome to Restro ${registerForm.firstName} !`)
            setpage('login')
        }).catch((error) => {
            Notify("error", `${error?.response?.data}`)
        }).finally(()=>{
            setloader(false)
        })
        document.querySelector('form').reset()
    }

    const reset = () => {

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
                            <input type="text" name='email' placeholder='E-mail'
                                onKeyDown={onEnter}
                                onChange={(e) => handleChange(e.target.name, e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Password:-</label> <br />
                            <input type="password" name='password' placeholder='Password'
                                onKeyDown={onEnter}
                                onChange={(e) => handleChange(e.target.name, e.target.value)} />
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
                        <div className="input-group" style={{ display: 'flex' }}>
                            <div className="inside" style={{ marginRight: '10px' }}>
                                <label htmlFor="">FirstName:-</label> <br />
                                <input type="text" name='firstName' placeholder='firstName'
                                    onKeyDown={onEnter}
                                    onChange={(e) => handleChange(e.target.name, e.target.value)} />
                            </div>
                            <div className="inside">
                                <label htmlFor="">LastName:-</label> <br />
                                <input type="text" name='lastName' placeholder='lastName'
                                    onKeyDown={onEnter}
                                    onChange={(e) => handleChange(e.target.name, e.target.value)} />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">MobileNo</label> <br />
                            <input type="text" name='mobileNumber' placeholder='mobileNumber'
                                onKeyDown={onEnter}
                                onChange={(e) => handleChange(e.target.name, e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">E-mail:-</label> <br />
                            <input type="email" name='email' placeholder='E-mail'
                                onKeyDown={onEnter}
                                onChange={(e) => handleChange(e.target.name, e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Password:-</label> <br />
                            <input type="password" name='password' placeholder='password'
                                onKeyDown={onEnter}
                                onChange={(e) => handleChange(e.target.name, e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">ConfirmPassword:-</label> <br />
                            <input type="password" name='confirmPassword' placeholder='Password'
                                onKeyDown={onEnter}
                                onChange={(e) => handleChange(e.target.name, e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">ProfileUrl:-</label> <br />
                            <input type="text" name='profileImage' placeholder='profileImage'
                                onKeyDown={onEnter}
                                onChange={(e) => handleChange(e.target.name, e.target.value)} />
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
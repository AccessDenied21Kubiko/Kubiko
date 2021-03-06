import React, { useState, useContext } from 'react';
import AuthService from '../Services/AuthService';
import loginSvg from '../Images/login.svg'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'

const Login = (props) => {

    const [user, setUser] = useState({ email: "", password: "" })
    const authContext = useContext(AuthContext);

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const Submit = e => {
        e.preventDefault()
        AuthService.login(user).then(data => {

            const { message } = data
            if (!message.msgError) {
                const { user, isAuthenticated } = data

                authContext.setUser(user)
                authContext.setIsAuthenticated(isAuthenticated)
                // Kindda like redirect page
                props.history.push('./');

            } else {

            }
        })
    }


    return (
        <div className="clouds min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
            <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
                <div className="md:flex w-full">
                    <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                        <img src={loginSvg} alt="Login" className="mt-10" />
                    </div>
                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl text-gray-900 capitalize">Login</h1>
                            <p>Welcome Back User</p>
                        </div>
                        <div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label htmlFor className="text-xs font-semibold px-1">Email</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                                        </div>
                                        <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="arkaraj@test.com" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-7">
                                    <label htmlFor className="text-xs font-semibold px-1">Password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                                        </div>
                                        <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold capitalize">Login
              </button>
                                    <div className="text-center mt-2">
                                        Don't have an account? <Link to="/register" className="text-indigo-500 underline cursor-pointer">Register</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login

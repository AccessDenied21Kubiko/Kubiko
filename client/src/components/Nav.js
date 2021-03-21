import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import AuthService from '../Services/AuthService'
import { Link } from 'react-router-dom'


const Nav = () => {


    // const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    // const logoutHandlr = () => {
    //     AuthService.logout().then(data => {
    //         if (data.success) {
    //             setUser(data.user)
    //             setIsAuthenticated(false)
    //         }
    //     })
    // }




    return (
        <>
            {/* <div className="inset-0 bg-black opacity-25 absolute" /> */}
            <header className="absolute bg-indigo-500 top-0 left-0 right-0 z-20">
                <nav className="container mx-auto px-6 md:px-12 py-4" x-data="{ open: false }">
                    <div className="md:flex justify-between items-center">
                        <div className="flex justify-between items-center">
                            <Link to="/" className="text-white">
                                {/* This will be the Kubiko Logo */}
                                {/* <img src={Kubikoimg} alt="Kubiko" /> */}
                                Kubiko
                            </Link>
                            <div className="md:hidden">
                                <button className="text-white focus:outline-none">
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path x-show="open === false" d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        <path x-show="open === true" d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center">
                            <Link className="text-sm uppercase mx-3 text-white cursor-pointer hover:text-indigo-200">About us</Link>
                            <Link to="/login" className="text-sm uppercase mx-3 text-white cursor-pointer hover:text-indigo-200">Login</Link>
                            <Link to="/register" className="text-sm uppercase mx-3 text-white cursor-pointer hover:text-indigo-200">Register</Link>
                        </div>
                    </div>
                    <div x-show="open === true" className="md:hidden flex flex-col w-full z-40 bg-indigo-600 rounded mt-4 py-2 overflow-hidden">
                        <Link className="font-mitr text-sm uppercase text-gray-200 py-2 px-2 hover:bg-indigo-500">About us</Link>
                        <Link to="/login" className="font-mitr text-sm uppercase text-gray-200 py-2 px-2 hover:bg-indigo-500">Login</Link>
                        <Link to="/register" className="font-mitr text-sm uppercase text-gray-200 py-2 px-2 hover:bg-indigo-500">Register</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Nav

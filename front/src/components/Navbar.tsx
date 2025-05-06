'use client'

import { useAuth } from '@/app/context/AuthContext'
import Link from 'next/link'
/* import React, { useState } from 'react' */
const URL = "http://localhost:3000"

const Navbar = () => {
    const { userData, logout } = useAuth();

    const handleLogout = () => {
        if (userData?.token) {
            alert("User logged out");
            logout();
        }
    }

    return (
        <div>
            <nav className="flex items-center justify-between p-4 rounded-2xl shadow-md">
                {/* Logo */}
                <div className="font-bold text-2xl text-gray-800">
                    <Link href={`${URL}`}>
                        MoraShop
                    </Link>
                </div>

                {/* Buscador */}
                <div className="flex-grow max-w-lg mx-4">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Botones principales */}
                <div className="flex space-x-6">
                    <Link href={`${URL}`} className="text-blue-600 hover:text-blue-800 focus:outline-none">
                        Home
                    </Link>
                    <button className="text-blue-600 hover:text-blue-800 focus:outline-none">
                        Products
                    </button>
                    <button className="text-blue-600 hover:text-blue-800 focus:outline-none">
                        Contact Us
                    </button>
                </div>

                {/* Botones adicionales: Carrito y Login */}
                <div className="flex space-x-6 ml-6">
                    {
                        userData?.token ? (
                            <>
                                <Link href="/cart" className="text-blue-600 hover:text-blue-800 focus:outline-none">
                                    <span role="img" aria-label="carrito">🛒</span> Cart
                                </Link>
                                <Link href="/dashboard" className="text-blue-600 hover:text-blue-800 focus:outline-none">
                                    Profile
                                </Link>
                                <Link onClick={handleLogout} href="/" className="text-blue-600 hover:text-blue-800 focus:outline-none">
                                    Log out
                                </Link>
                            </>
                        ) :
                            <Link href="/login" className="text-blue-600 hover:text-blue-800 focus:outline-none">
                                Log In
                            </Link>

                    }

                </div>
            </nav>
        </div>
    )
}

export default Navbar
Navbar
import Link from 'next/link'
import React from 'react'
const URL = "http://localhost:3000"

const Navbar = () => {
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
                    <Link href={`${URL}`}>
                        <button className="text-blue-600 hover:text-blue-800 focus:outline-none">
                            Inicio
                        </button>
                    </Link>
                    <button className="text-blue-600 hover:text-blue-800 focus:outline-none">
                        Productos
                    </button>
                    <button className="text-blue-600 hover:text-blue-800 focus:outline-none">
                        Contacto
                    </button>
                </div>

                {/* Botones adicionales: Carrito y Login */}
                <div className="flex space-x-6 ml-6">
                    <button className="text-blue-600 hover:text-blue-800 focus:outline-none">
                        <span role="img" aria-label="carrito">🛒</span> Carrito
                    </button>
                    <button className="text-blue-600 hover:text-blue-800 focus:outline-none">
                        Iniciar sesión
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
Navbar
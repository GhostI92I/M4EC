'use client'

import { useAuth } from '@/app/context/AuthContext'
import React from 'react'

const DashboardComponent = () => {
    const { userData } = useAuth();

    return (
        <div className="max-w-xl mx-auto p-6">
            <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4">
                <h1 className="text-2xl font-bold text-gray-800">Perfil</h1>

                <div className="space-y-2">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700">Nombre:</h2>
                        <p className="text-gray-600">{userData?.user.name}</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-gray-700">Correo electrónico:</h2>
                        <p className="text-gray-600">{userData?.user.email}</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-gray-700">Teléfono:</h2>
                        <p className="text-gray-600">{userData?.user.phone}</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-gray-700">Dirección:</h2>
                        <p className="text-gray-600">{userData?.user.address}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardComponent


'use client'

import { useAuth } from '@/app/context/AuthContext'
import React from 'react'

const DashboardComponent = () => {
    const { userData } = useAuth();

    return (
        <div>
            <h1>Profile</h1>
            <h2>{userData?.user.name}</h2>
            <h3>email registered: {userData?.user.email}</h3>
            <h3>Phone: {userData?.user.phone}</h3>
            <h3>Address: {userData?.user.address}</h3>
        </div>
    )
}

export default DashboardComponent

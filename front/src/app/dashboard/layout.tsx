import Link from 'next/link'
import React, { ReactNode } from 'react'

interface DashboardProps {
    children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardProps> = ({ children }) => {
    return (
        <div>
            <Link href={"/dashboard"}>Profile</Link>
            <Link href={"/dashboard/orders"}>Orders</Link>
            {children}
        </div>
    )
}

export default DashboardLayout

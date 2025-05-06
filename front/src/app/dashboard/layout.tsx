import Link from 'next/link'
import React from 'react'

interface DashboardProps {
  children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardProps> = ({ children }) => {
  return (
    <div className="max-w-100 mx-auto p-6">
      <nav className="flex gap-4 border-b pb-4 mb-6 justify-center">
        <Link
          href="/dashboard"
          className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
        >
          Perfil
        </Link>
        <Link
          href="/dashboard/orders"
          className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
        >
          Pedidos
        </Link>
      </nav>

      <main>{children}</main>
    </div>
  )
}

export default DashboardLayout


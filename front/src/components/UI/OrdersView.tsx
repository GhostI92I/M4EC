'use client'

import { useAuth } from "@/app/context/AuthContext"
import { IOrder } from "@/types"
import { getOrders } from "@/utils/orders.helpers"
import { useEffect, useState } from "react"

const OrdersView = () => {
  const { userData } = useAuth()
  const [orders, setOrders] = useState<IOrder[]>([])

  const loadOrders = async () => {
    if (userData?.token) {
      const response = await getOrders(userData.token)
      setOrders(response)
    }
  }

  useEffect(() => {
    loadOrders()
  }, [])

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Tus pedidos</h1>

      {orders.length ? (
        orders.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl p-4 shadow-sm space-y-2"
          >
            <p
              className={`text-sm font-semibold ${
                item.status.toLowerCase() === "approved"
                  ? "text-green-600"
                  : "text-gray-600"
              }`}
            >
              Estado: {item.status.toUpperCase()}
            </p>
            <p className="text-gray-700 text-sm">
              Fecha: {new Date(item.date).toLocaleDateString()}
            </p>
          </div>
        ))
      ) : (
        <div className="text-gray-600 text-center p-8 bg-white border rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold">Aún no tienes pedidos registrados.</h2>
        </div>
      )}
    </div>
  )
}

export default OrdersView

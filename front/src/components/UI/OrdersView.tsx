'use client'

import { useAuth } from "@/app/context/AuthContext"
import { getOrders } from "@/utils/orders.helpers";
import { useEffect, useState } from "react";

const OrdersView = () => {
    const { userData } = useAuth();
    const { orders, setOrders } = useState([])

    const loadOrders = async () => {
        if (userData?.token) {
            const response = await getOrders(userData?.token!);
            setOrders(response)
        }
    }
    useEffect(() => {
        loadOrders();
    }, [])
    return (
        <div>
            <h1>Orders view</h1>
        </div>
    )
}

export default OrdersView

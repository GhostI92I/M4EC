'use client'

import { useAuth } from "@/app/context/AuthContext"
import { getOrders } from "@/utils/orders.helpers";
import { useEffect, useState } from "react";

const OrdersView = () => {
    const { userData } = useAuth();
    const [orders, setOrders] = useState([]);

    const loadOrders = async () => {
        if (userData?.token) {
            const response = await getOrders(userData?.token);
            setOrders(response)
        }
    }
    useEffect(() => {
        loadOrders();
    }, [])

    console.log(orders);

    return (
        <div>
            <h1>Your orders:</h1>
            {
                orders.length ? (
                    orders.map((item) => {
                        return (
                            <div key={item.id}>
                                <p>Status: {item.status.toLocaleUpperCase()}</p>
                                <p>Date - {new Date(item.date)?.toLocaleDateString()}</p>
                            </div>
                        )
                    })
                ) : (
                    <div>
                        <h1>You don't have any orders yet</h1>
                    </div>
                )
            }
        </div>
    )
}

export default OrdersView

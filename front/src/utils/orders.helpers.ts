const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(products: number[], token: string) {
    try {
        const response = await fetch(`${APIURL}/orders`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({ products }),
        });

        if (response.ok) {
            alert("Purchase completed successfully");
            return await response.json();
        } else {
            throw new Error("Failed to create order");
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("An unknown error occurred");
    }
}

export async function getOrders(token: string) {
    try {
        const response = await fetch(`${APIURL}/users/orders`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: token,
            },
        });

        if (response.ok) {
            return await response.json();
        } else {
            throw new Error("Failed to fetch orders");
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("An unknown error occurred");
    }
}

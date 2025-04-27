const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(products: number[], token: string) {
    try {
        const response = await fetch(`${APIURL}/orders`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                Authorization: token
            },
            body: JSON.stringify({
                products
            })
        })
        if (response.ok) {
            alert('Buy succesfully')
        }
    } catch (error: any) {
        throw new Error(error);
    }
};
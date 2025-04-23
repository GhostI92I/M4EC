import { IProduct, IRegisterProps } from "@/types";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function register(userData: IRegisterProps) {
    try {
        const response = await fetch(`${APIURL}/users/register`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if (response.ok) {
            alert("User registered succeed")
            return response.json();
        } else {
            alert("User register has failed")
            throw new Error ("Server failed to register the user")
        }
    } catch (error: any) {
        throw new Error(error);
    }
}
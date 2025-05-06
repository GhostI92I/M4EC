import { ILoginProps, IRegisterProps } from "@/types"

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function register(userData: IRegisterProps) {
    try {
        const response = await fetch(`${APIURL}/users/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(userData),
        })

        if (response.ok) {
            alert("User registered successfully")
            return response.json()
        } else {
            alert("User register has failed")
            throw new Error("Server failed to register the user")
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message)
        }
        throw new Error("An unknown error occurred")
    }
}

export async function login(userData: ILoginProps) {
    try {
        const response = await fetch(`${APIURL}/users/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(userData),
        })

        if (response.ok) {
            alert("User logged in successfully")
            return response.json()
        } else {
            alert("User login has failed")
            throw new Error("Server failed to login the user")
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message)
        }
        throw new Error("An unknown error occurred")
    }
}

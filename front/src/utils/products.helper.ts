import { IProduct } from "@/types";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function getProductsDB(): Promise<IProduct[]> {
    try {
        const response = await fetch(`${APIURL}/products`)
        const products: IProduct[] = await response.json();
        return products;
    } catch (error: any) {
        throw new Error(error);
    }
}
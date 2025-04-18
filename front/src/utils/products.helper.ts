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

/* Al no existir una función para retornar un producto por ID, utilizamos la siguiente función para que cumpla con dicha función y a la vez, ésta función no hace una solicitud inecesaria al backend */
export async function getProductById(id: String): Promise<IProduct> {
    try {
        const products: IProduct[] = await getProductsDB();
        const productFiltered = products.find((product) => product.id.toString() === id)
        if (!productFiltered) throw new Error("Product not found")
        return productFiltered;
    } catch (error: any) {
        throw new Error(error);
    }
}
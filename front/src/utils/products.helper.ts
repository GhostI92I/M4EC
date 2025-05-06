import { IProduct } from "@/types";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function getProductsDB(): Promise<IProduct[]> {
    try {
        const response = await fetch(`${APIURL}/products`);

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products: IProduct[] = await response.json();
        return products;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("An unknown error occurred while fetching products");
    }
}

/**
 * Obtiene un producto por su ID desde la lista precargada en frontend
 * para evitar peticiones extra al backend.
 */
export async function getProductById(id: string): Promise<IProduct> {
    try {
        const products: IProduct[] = await getProductsDB();
        const productFiltered = products.find((product) => product.id.toString() === id);

        if (!productFiltered) {
            throw new Error("Product not found");
        }

        return productFiltered;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("An unknown error occurred while fetching the product by ID");
    }
}

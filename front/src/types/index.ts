/* {
    "id": 1,
    "name": "iPhone 16 PRO",
    "description": "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    "price": 699,
    "stock": 10,
    "image": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-model-unselect-gallery-2-202409?wid=5120&hei=2880&fmt=webp&qlt=70&.v=aWs5czA5aDFXU0FlMGFGRlpYRXk2UWFRQXQ2R0JQTk5udUZxTkR3ZVlpTDUwMGlYMEhQSTVNdkRDMFExUU1KbTBoUVhuTWlrY2hIK090ZGZZbk9HeE1xUVVnSHY5eU9CcGxDMkFhalkvT0FmZ0ROUGFSR25aOE5EM2xONlRwa09mbW94YnYxc1YvNXZ4emJGL0IxNFp3&traceId=1g",
    "categoryId": 1
},
 */
export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number
}

export interface ICategory {
    id: number;
    name: string
}

export interface ILoginProps {
    email: string;
    password: string;
}

export interface ILoginErrors {
    email?: string;
    password?: string;
}

export interface IRegisterProps {
    name: string;
    email: string;
    password: string;
    confpassword: string;
    address: string;
    phone: string;
}

export interface IRegisterErrors {
    name?: string;
    email?: string;
    password?: string;
    confpassword?: string;
    address?: string;
    phone?: string;
}

export interface IUserSession {
    token: string;
    user: {
        name: string,
        email: string,
        phone: string,
        address: string,
        id: number,
        orders: []
    }
}

export interface IOrder{
    id: number,
    status: string, 
    date: Date, 
    products: IProduct[]
}
import { StaticImageData } from "next/image";

interface ProductsListProps {
    id: number;
    name: string;
    description: string;
    price: string;
    image: StaticImageData;
    available: boolean;

}

import ProductImage1 from "@/public/images/9ef8b49323e14bf089e669b60b389f77.jpg";
import ProductImage2 from "@/public/images/f443fa7b6f7b4310ae62c088a407c684.jpg";

export const ProductsList: ProductsListProps[] = [
    {
        id: 1,
        name: "pixel 7",
        description: "A Product Designer focused on intuitive user experience",
        price: "1,950,000" ,
        image: ProductImage1,
        available: true
    },
     {
        id: 2,
        name: "Iphone 13",
        description: "A Product Designer focused on intuitive user experience",
        image: ProductImage2,
        price: "2,300,000" ,
        available: true
    },
     {
        id: 3,
        name: "pixel 7",
        description: "A Product Designer focused on intuitive user experience",
        image: ProductImage1,
        price: "1,950,000" ,
        available: false
    },
     {
        id: 3,
        name: "Iphone 13",
        description: "A Product Designer focused on intuitive user experience",
        image: ProductImage2,
        price: "2,300,000" ,
        available: true
    },
]
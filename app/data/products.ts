import { StaticImageData } from "next/image";

interface ProductsListProps {
    id: number;
    name: string;
    description: string;
    price: string;
    image: StaticImageData;
    available: boolean;

}

import ProductImage1 from "@/public/images/products/9ef8b49323e14bf089e669b60b389f77.jpg";
import ProductImage2 from "@/public/images/products/f443fa7b6f7b4310ae62c088a407c684.jpg";

export const ProductsList: ProductsListProps[] = [
    {
        id: 1,
        name: "Pixel 7",
        description: "Modern smartphone with a crisp display, fast performance, and reliable battery life.",
        price: "1,950,000",
        image: ProductImage1,
        available: true
    },
    {
        id: 2,
        name: "iPhone 13",
        description: "Premium Apple handset with an advanced camera system and polished build quality.",
        image: ProductImage2,
        price: "2,300,000",
        available: true
    },
    {
        id: 3,
        name: "Pixel 7",
        description: "Designed for smooth multitasking with sharp visuals and an ergonomic feel.",
        image: ProductImage1,
        price: "1,950,000",
        available: true
    },
    {
        id: 4,
        name: "iPhone 13",
        description: "Compact and capable phone offering seamless performance and dependable everyday use.",
        image: ProductImage2,
        price: "2,300,000",
        available: true
    },
    {
        id: 5,
        name: "Pixel 7",
        description: "Feature-packed device with excellent camera clarity and responsive touch controls.",
        image: ProductImage1,
        price: "1,950,000",
        available: true
    },
    {
        id: 6,
        name: "iPhone 13",
        description: "Reliable smartphone choice with a vivid display and smooth performance for daily tasks.",
        image: ProductImage2,
        price: "2,300,000",
        available: true
    },
]
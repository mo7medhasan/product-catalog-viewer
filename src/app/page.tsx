import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types/product.types";
import { use } from "react";

const getProducts = async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  return data;
}
export default function Home() {
const products = use(getProducts());

  return (
    <div className=" min-h-screen bg-gray-300/50 font-sans py-10 ">
  
  <div className="container mx-auto flex flex-wrap gap-4 justify-center items-center">
    {products.products.map((product: Product) => (
      <ProductCard key={product.id} product={product} />
    ))}
    </div>
    </div>
  );
}

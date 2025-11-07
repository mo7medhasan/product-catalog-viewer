import { ProductCard } from "@/components/ProductCard";
import SearchInput from "@/components/SearchInput";
import { getProducts, getProductsWithSearch } from "@/services/product.api";
import { Product } from "@/types/product.types";
import { use } from "react";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}
export default function Home({ searchParams }: SearchPageProps) {
  const params = use(searchParams);
  const query = params.q || '';
  
  // Fetch products based on search query
  const productsData = use(
    query ? getProductsWithSearch({ search: query }) : getProducts()
  );

  return (
    <div className=" min-h-screen bg-gray-300/50 font-sans py-10  relative flex flex-col items-center">

      <SearchInput  />
  <div className="container mx-auto flex flex-wrap gap-4 justify-center items-center mt-32">
    {productsData.products.map((product: Product) => (
      <ProductCard key={product.id} product={product} />
    ))}
    </div>
    </div>
  );
}

import SearchInput from "@/components/SearchInput";
import { getProducts, getProductsWithSearch } from "@/services/product.api";
import { use } from "react";
import InfiniteScrollProducts from "./_components/InfiniteScrollProducts";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default function Home({ searchParams }: SearchPageProps) {
  const params = use(searchParams);
  const query = params.q || "";

  const LIMIT = 6;

  // Fetch initial products on server
  const productsData = use(
    query
      ? getProductsWithSearch({ search: query, limit: LIMIT, skip: 0 })
      : getProducts({ limit: LIMIT, skip: 0 })
  );

  return (
    <div className="min-h-screen bg-gray-300/50 font-sans py-10 relative flex flex-col items-center">
      <SearchInput />
      <InfiniteScrollProducts
        initialProducts={productsData.products}
        initialTotal={productsData.total}
        query={query}
        limit={LIMIT}
      />
    </div>
  );
}
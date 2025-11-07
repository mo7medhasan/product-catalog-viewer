"use client";

import { ProductCard } from "@/components/ProductCard";
import { getProducts, getProductsWithSearch } from "@/services/product.api";
import { Product } from "@/types/product.types";
import { useEffect, useState, useRef, useCallback } from "react";

interface InfiniteScrollProductsProps {
  initialProducts: Product[];
  initialTotal: number;
  query: string;
  limit: number;
}

export default function InfiniteScrollProducts({
  initialProducts,
  initialTotal,
  query,
  limit,
}: InfiniteScrollProductsProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialProducts.length < initialTotal);
  const [page, setPage] = useState(1);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setProducts(initialProducts);
    setPage(1);
    setHasMore(initialProducts.length < initialTotal);
  }, [query, initialProducts, initialTotal]);

  const loadMoreProducts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const skip = page * limit;
      const data = query
        ? await getProductsWithSearch({ search: query, limit, skip })
        : await getProducts({ limit, skip });

      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prev) => {
          const existingIds = new Set(prev.map((p) => p.id));
          const newProducts = data.products.filter(
            (p: Product) => !existingIds.has(p.id)
          );
          return [...prev, ...newProducts];
        });
        setPage((prev) => prev + 1);

        if (skip + data.products.length >= data.total) {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  }, [page, query, loading, hasMore, limit]);

  const lastProductRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreProducts();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMoreProducts]
  );

  return (
    <>
      <div className="container mx-auto flex flex-wrap gap-4 justify-center items-center mt-16">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {hasMore ? (
          <div
            ref={lastProductRef}
            className="product-card bg-gray-500/30 relative h-full  rounded-2xl  animate-ping "
          />
        ) : null}
      </div>

      {loading && (
        <div className="flex justify-center items-center py-8 fixed w-full bottom-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      )}

      {!hasMore && products.length > 0 && (
        <div className="text-center py-8 text-gray-600">
       No more products 
        </div>
      )}

      {!loading && products.length === 0 && (
        <div className="text-center py-8 text-gray-600">
        No products found 
        </div>
      )}
    </>
  );
}

"use client";

import { useState, useTransition } from "react";
import { Search, Filter, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getProductsWithSearch } from "@/services/product.api";
import { Product } from "@/types/product.types";


export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState<"results" | "filters">("results");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  async function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      const q = e.target.value;
      setQuery(q);

      const textSearch = q.trim();
      if (textSearch.length === 0) {
        setResults([]);
        router.push("/");
        return;
      }
      startTransition(async () => {
        if (activeTab === "results") {
          try {
            const data = await getProductsWithSearch({ search: textSearch });
            setResults(data.products);
            router.push("/");
          } catch (error) {
            console.error("Error fetching products:", error);
            setResults([]);
          }
        } else {
          setResults([]);

          router.push(`/?q=${encodeURIComponent(textSearch)}`);
        }
      });
    } catch (error) {
      console.error("Error during search:", error);
    }
  }

  return (
    <div className="mx-auto space-y-4 relative">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />
          <input
            type="text"
            value={query}
            onChange={handleInput}
            placeholder="Search products..."
            className="w-full rounded-2xl border border-gray-300 bg-white pl-10 pr-10 py-2 text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
          {isPending && (
            <Loader2
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 animate-spin"
              size={18}
            />
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-all text-sm font-medium ${
              activeTab === "results"
                ? "bg-blue-500 text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-blue-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("results")}
          >
            <Search size={14} />
            <span>Results</span>
          </button>
          <button
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-all text-sm font-medium ${
              activeTab === "filters"
                ? "bg-blue-500 text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-blue-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("filters")}
          >
            <Filter size={14} />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {activeTab === "results" && query.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 min-h-[120px] absolute top-10 w-full max-w-md z-50">
          {isPending ? (
            <div className="flex items-center justify-center h-20">
              <p className="text-gray-400 text-sm">Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <ul className="space-y-1">
              {results.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/product/${item.id}` || "#"}
                    className="block px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-800 font-medium"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex items-center justify-center h-20">
              <p className="text-gray-500 text-sm">No results found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

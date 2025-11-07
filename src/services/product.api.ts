import { DeleteProductState, ProductDetail } from "@/types/product.types";
const BASE_URL = process.env.BASE_URL || "https://dummyjson.com/products";
export const getProductById = async (
  id: string
): Promise<ProductDetail | null> => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch product");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
export const deleteProductById = async (id: string): Promise<boolean> => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete product: ${response.statusText}`);
    }

    return true;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

'use server';

import { deleteProductById } from '@/services/product.api';
import { DeleteProductState } from '@/types/product.types';
import { revalidatePath } from 'next/cache';



export async function deleteProduct(
  prevState: DeleteProductState,
  formData: FormData
): Promise<DeleteProductState> {
  const productId = formData.get('productId') as string;

  // Validation
  if (!productId) {
    return { error: 'Product ID is required' };
  }

  if (!/^\d+$/.test(productId)) {
    return { error: 'Invalid product ID format' };
  }

  try {
    // Call the service to delete the product
    await deleteProductById(productId);

    // Revalidate the product list page and product detail page
    revalidatePath('/');
    revalidatePath(`/product/${productId}`);

    return { success: true };
  } catch (error) {
    console.error('Error deleting product:', error);
    
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Failed to delete product. Please try again.';

    return { error: errorMessage };
  }
}

/**
 * Calculate the discounted price based on original price and discount percentage
 * @param price - Original price
 * @param discountPercentage - Discount percentage (0-100)
 * @returns Discounted price
 */
export function calculateDiscountedPrice(
  price: number,
  discountPercentage: number
): number {
  if (discountPercentage <= 0) {
    return price;
  }
  return price - (price * discountPercentage) / 100;
}

/**
 * Check if a discount is significant (greater than 0.5%)
 * @param discountPercentage - Discount percentage
 * @returns Boolean indicating if discount is significant
 */
export function hasSignificantDiscount(discountPercentage: number): boolean {
  return discountPercentage > 0.5;
}

/**
 * Format price to 2 decimal places
 * @param price - Price to format
 * @returns Formatted price string
 */
export function formatPrice(price: number): string {
  return price.toFixed(2);
}

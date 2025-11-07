
import { calculateDiscountedPrice, formatPrice, hasSignificantDiscount } from '@/utils/product.utils';

interface ProductPriceProps {
  price: number;
  discountPercentage: number;
}

export function ProductPrice({ price, discountPercentage }: ProductPriceProps) {
  const showDiscount = hasSignificantDiscount(discountPercentage);
  const discountedPrice = calculateDiscountedPrice(price, discountPercentage);

  return (
    <div className="flex items-baseline gap-3 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200">
      {showDiscount ? (
        <>
          <span className="text-xl sm:text-2xl text-gray-500 line-through">
            ${formatPrice(price)}
          </span>
          <span className="text-3xl sm:text-5xl font-extrabold text-blue-500">
            ${formatPrice(discountedPrice)}
          </span>
        </>
      ) : (
        <span className="text-3xl sm:text-5xl font-extrabold text-blue-500">
          ${formatPrice(price)}
        </span>
      )}
    </div>
  );
}
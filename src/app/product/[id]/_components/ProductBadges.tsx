import { hasSignificantDiscount } from "@/utils/product.utils";


interface ProductBadgesProps {
  discountPercentage: number;
  stock: number;
  availabilityStatus: string;
}

export function ProductBadges({
  discountPercentage,
  stock,
  availabilityStatus,
}: ProductBadgesProps) {
  return (
    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-col gap-2 z-10">
      {hasSignificantDiscount(discountPercentage) && (
        <div className="badge-animate px-2.5 py-1.5 sm:px-3 rounded-lg text-xs font-bold uppercase tracking-wide backdrop-blur-md bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/40">
          -{discountPercentage.toFixed(0)}%
        </div>
      )}
      {stock === 0 && (
        <div className="badge-animate px-2.5 py-1.5 sm:px-3 rounded-lg text-xs font-bold uppercase tracking-wide backdrop-blur-md bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg shadow-orange-500/40">
          OUT OF STOCK
        </div>
      )}
      {availabilityStatus === 'In Stock' && stock > 0 && (
        <div className="badge-animate px-2.5 py-1.5 sm:px-3 rounded-lg text-xs font-bold uppercase tracking-wide backdrop-blur-md bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg shadow-green-500/40">
          {availabilityStatus}
        </div>
      )}
    </div>
  );
}
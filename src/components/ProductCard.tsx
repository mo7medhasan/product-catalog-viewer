import { Product } from "@/types/product.types";
import Image from "next/image";
import { Rating } from "./Rating";
import Link from "next/link";
import { calculateDiscountedPrice, formatPrice, hasSignificantDiscount } from "@/utils/product.utils";
type productProps = {
  product: Product;
};
export const ProductCard = ({ product }: productProps) => {
  const discountedPrice = calculateDiscountedPrice(
    product.price,
    product.discountPercentage
  );

  return (
    <div className="group relative h-full   product-card ">
      <div className="card-wrapper relative h-full  rounded-2xl overflow-hidden border bg-white border-gray-200/5 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-black/30 group-hover:border-gray-500/40">
        {/* Image Container */}
        <div className="relative w-full aspect-square overflow-hidden bg-linear-to-br from-slate-800 to-slate-700">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
            />
          </div>

          {/* Badges */}
          <div className="absolute top-4 start-4 flex flex-col gap-2 z-10">
            {hasSignificantDiscount(product.discountPercentage)&& (
              <div className="badge-animate px-3 py-1.5 rounded-lg text-xs  font-bold uppercase tracking-wide backdrop-blur-md bg-linear-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/40">
                -{product.discountPercentage.toFixed(0)}%
              </div>
            )}
            {product.stock === 0 && (
              <div className="badge-animate px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide backdrop-blur-md bg-linear-to-r from-orange-400 to-orange-500 text-white shadow-lg shadow-orange-500/40">
                OUT of Stock
              </div>
            )}
          </div>

          {/* Shine Effect */}
          <div className="shine-effect absolute inset-0 bg-linear-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-3">
          {/* Category & Brand */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-gray-700/70">
            <span className="text-blue-400 font-semibold">
              {product.category}
            </span>
            {product.brand && (
              <>
                <span className="text-slate-600">•</span>
                <span>{product.brand}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-700/80 leading-tight line-clamp-1 group-hover:text-blue-400 transition-colors duration-200">
            {product.title}
          </h3>

          {/* Rating */}
          <Rating
            rating={product.rating}
            reviewsLength={product.reviews.length}
          />

          {/* Price & Action */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-baseline gap-2">
              {hasSignificantDiscount(product.discountPercentage)? (
                <>
                  <span className="text-sm text-gray-500 line-through">
                    ${formatPrice(product.price) }
                  </span>
                  <span className="text-2xl font-extrabold text-blue-500 ">
                    ${formatPrice(discountedPrice)}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-extrabold text-blue-500 ">
                  ${formatPrice(product.price) }
                </span>
              )}
            </div>
          </div>
          {/* Hover Actions */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
            <Link
              href={`/product/${product.id}`}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-blue-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-200"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

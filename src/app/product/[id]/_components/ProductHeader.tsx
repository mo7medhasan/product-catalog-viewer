import { Rating } from "@/components/Rating";


interface ProductHeaderProps {
  category: string;
  brand?: string;
  title: string;
  rating: number;
  reviewsLength: number;
}

export function ProductHeader({
  category,
  brand,
  title,
  rating,
  reviewsLength,
}: ProductHeaderProps) {
  return (
    <div>
      {/* Category & Brand */}
      <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-gray-700/70 mb-3">
        <span className="text-blue-400 font-semibold">{category}</span>
        {brand && (
          <>
            <span className="text-slate-600">•</span>
            <span>{brand}</span>
          </>
        )}
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700/80 leading-tight mb-4">
        {title}
      </h1>

      {/* Rating */}
      <div className="mb-6">
        <Rating rating={rating} reviewsLength={reviewsLength} />
      </div>
    </div>
  );
}
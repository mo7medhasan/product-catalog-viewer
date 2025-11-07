import { Rating } from "@/components/Rating";
import { Review } from "@/types/product.types";

interface ProductReviewsProps {
  reviews: Review[];
}

export function ProductReviews({ reviews }: ProductReviewsProps) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <div className="mb-6 sm:mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-700/80 mb-4">
        Customer Reviews ({reviews.length})
      </h3>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-200/50"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base">
                  {review.reviewerName}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
              <Rating rating={review.rating} reviewsLength={0} showNumber={false} />
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
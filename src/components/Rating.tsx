import { Star } from "lucide-react";
import { useId } from "react";

type props = {
  rating: number;
  reviewsLength?: number;
  showNumber?: boolean;
};
export const Rating = ({ rating, reviewsLength, showNumber = true }: props) => {
    const id= useId()
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i+ id }
            size={14}
            className={`${
              i < Math.round(rating)
                ? "text-orange-400 fill-orange-400"
                : "text-slate-600"
            }`}
            fill={i < Math.round(rating) ? "currentColor" : "none"}
          />
        ))}
      </div>
      {showNumber && (
        <span className="text-xs text-gray-400">
          {rating.toFixed(1)} ({reviewsLength ?? 0})
        </span>
      )}
    </div>
  );
};


interface ProductTagsProps {
  tags: string[]|[];
}

export function ProductTags({ tags }: ProductTagsProps) {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className="mb-6 sm:mb-8">
      <h3 className="text-base sm:text-lg font-bold text-gray-700/80 mb-3">
        Tags
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
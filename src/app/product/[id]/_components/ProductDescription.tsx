interface ProductDescriptionProps {
    description: string;
  }
  
  export function ProductDescription({ description }: ProductDescriptionProps) {
    return (
      <div className="mb-6 sm:mb-8">
        <h3 className="text-lg sm:text-xl font-bold text-gray-700/80 mb-3">
          Description
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      </div>
    );
  }
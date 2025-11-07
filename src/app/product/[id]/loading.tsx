
export default function ProductLoading() {
    return (
      <div className="min-h-screen bg-gray-300/50 font-sans py-10">
        <div className="container mx-auto px-4">
          {/* Back Button Skeleton */}
          <div className="h-6 w-40 bg-gray-300 rounded mb-6 animate-pulse" />
  
          {/* Main Grid */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Column - Image Skeleton */}
            <div className="lg:col-span-2">
              <div className="sticky top-10">
                {/* Main Image Skeleton */}
                <div className="w-full aspect-square rounded-2xl bg-gray-300 mb-4 animate-pulse" />
  
                {/* Thumbnails Skeleton */}
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg bg-gray-300 animate-pulse"
                    />
                  ))}
                </div>
              </div>
            </div>
  
            {/* Right Column - Details Skeleton */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-white border border-gray-200/5 shadow-2xl p-6 sm:p-8">
                {/* Category */}
                <div className="h-4 w-32 bg-gray-300 rounded mb-3 animate-pulse" />
  
                {/* Title */}
                <div className="h-8 sm:h-10 w-3/4 bg-gray-300 rounded mb-4 animate-pulse" />
  
                {/* Rating */}
                <div className="h-6 w-40 bg-gray-300 rounded mb-6 animate-pulse" />
  
                {/* Price */}
                <div className="flex items-baseline gap-3 mb-8 pb-8 border-b border-gray-200">
                  <div className="h-12 sm:h-16 w-48 bg-gray-300 rounded animate-pulse" />
                </div>
  
                {/* Description */}
                <div className="mb-8">
                  <div className="h-6 w-32 bg-gray-300 rounded mb-3 animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-300 rounded animate-pulse" />
                    <div className="h-4 w-full bg-gray-300 rounded animate-pulse" />
                    <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse" />
                  </div>
                </div>
  
                {/* Details Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8 pb-8 border-b border-gray-200">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="space-y-2">
                      <div className="h-3 w-20 bg-gray-300 rounded animate-pulse" />
                      <div className="h-5 w-32 bg-gray-300 rounded animate-pulse" />
                    </div>
                  ))}
                </div>
  
                {/* Button */}
                <div className="h-14 w-full sm:w-48 bg-gray-300 rounded-xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
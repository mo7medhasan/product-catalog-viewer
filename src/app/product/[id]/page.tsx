import { BackButton } from "@/components/BackButton";
import { getProductById } from "@/services/product.api";
import { notFound } from "next/navigation";
import { use } from "react";
import { ProductGallery } from "./_components/ProductGallery";
import { ProductBadges } from "./_components/ProductBadges";
import { Rating } from "@/components/Rating";
import { ProductPrice } from "./_components/ProductPrice";
import { ProductDescription } from "./_components/ProductDescription";
import { ProductDetailsGrid } from "./_components/ProductDetailsGrid";
import { ProductTags } from "./_components/ProductTags";
import { ProductReviews } from "./_components/ProductReviews";
import { DeleteProductButton } from "@/components/DeleteProductButton";
import { Metadata } from "next";

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  
  try {
    const product = await getProductById(id);
    
    if (!product) {
      return {
        title: 'Product Not Found',
      };
    }

    return {
      title: `${product.title} - ${product.brand || 'Shop'}`,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        images: [
          {
            url: product.images[0] || product.thumbnail,
            width: 800,
            height: 800,
            alt: product.title,
          },
        ],
      },
    };
  } catch {
    return {
      title: 'Error Loading Product',
    };
  }
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = use(getProductById(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-300/50 font-sans py-6 sm:py-10">
      <div className="container mx-auto px-4">
        {/* Back Button */}
     <BackButton />
        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Left Column - Images (2/5 width) */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-10">
              <div className="relative">
                <ProductGallery
                  images={product.images}
                  title={product.title}
                  thumbnail={product.thumbnail}
                />
                <ProductBadges
                  discountPercentage={product.discountPercentage}
                  stock={product.stock}
                  availabilityStatus={product.availabilityStatus}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Details (3/5 width) */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden border bg-white border-gray-200/5 shadow-2xl p-6 sm:p-8">
              {/* Category & Brand */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-gray-700/70 mb-3">
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
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700/80 leading-tight mb-4">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="mb-6">
                <Rating
                  rating={product.rating}
                  reviewsLength={product.reviews?.length || 0}
                />
              </div>

              {/* Price */}
              <ProductPrice
                price={product.price}
                discountPercentage={product.discountPercentage}
              />

              {/* Description */}
              <ProductDescription description={product.description} />

              {/* Product Details Grid */}
              <ProductDetailsGrid
                stock={product.stock}
                sku={product.sku}
                weight={product.weight}
                dimensions={product.dimensions}
                warrantyInformation={product.warrantyInformation}
                shippingInformation={product.shippingInformation}
                returnPolicy={product.returnPolicy}
                minimumOrderQuantity={product.minimumOrderQuantity}
              />

              {/* Tags */}
              <ProductTags tags={product.tags} />

              {/* Reviews */}
              <ProductReviews reviews={product.reviews || []} />

              {/* Action Button */}
              <DeleteProductButton productId={product.id.toString()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
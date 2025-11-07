import { ProductDimensions } from "@/types/product.types";


interface ProductDetailsGridProps {
  stock: number;
  sku: string;
  weight?: number;
  dimensions?: ProductDimensions;
  warrantyInformation?: string;
  shippingInformation?: string;
  returnPolicy?: string;
  minimumOrderQuantity?: number;
}

export function ProductDetailsGrid({
  stock,
  sku,
  weight,
  dimensions,
  warrantyInformation,
  shippingInformation,
  returnPolicy,
  minimumOrderQuantity,
}: ProductDetailsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200">
      <DetailItem label="Stock" value={`${stock} units`} />
      <DetailItem label="SKU" value={sku} />
      
      {weight && <DetailItem label="Weight" value={`${weight} kg`} />}
      
      {dimensions && (
        <DetailItem
          label="Dimensions"
          value={`${dimensions.width} × ${dimensions.height} × ${dimensions.depth} cm`}
        />
      )}
      
      {warrantyInformation && (
        <DetailItem label="Warranty" value={warrantyInformation} />
      )}
      
      {shippingInformation && (
        <DetailItem label="Shipping" value={shippingInformation} />
      )}
      
      {returnPolicy && <DetailItem label="Return Policy" value={returnPolicy} />}
      
      {minimumOrderQuantity && (
        <DetailItem
          label="Min Order Qty"
          value={`${minimumOrderQuantity} units`}
        />
      )}
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">
        {label}
      </span>
      <span className="text-base sm:text-lg font-semibold text-gray-700 wrap-break-word">
        {value}
      </span>
    </div>
  );
}

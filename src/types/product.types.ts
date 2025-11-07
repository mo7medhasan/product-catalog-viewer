export interface Review {
  rating: number;
  comment: string;
  date: Date | string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  sku: string;
  images: string[];
  thumbnail: string;
  availabilityStatus: string;
  warrantyInformation: string;
  reviews: Review[];
}

export interface ProductDetail extends Product {
  returnPolicy: string;
  shippingInformation: string;
  dimensions?: ProductDimensions;
  minimumOrderQuantity?: number;
  weight?: number;
  tags: string[];
}

export interface ProductDimensions {
  width: number;
  height: number;
  depth: number;
}

export interface DeleteProductState {
  error?: string;
  success?: boolean;
}

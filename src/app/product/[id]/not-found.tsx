
import Link from 'next/link';
import { PackageX, Home } from 'lucide-react';

export default function ProductNotFound() {
  return (
    <div className="min-h-screen bg-gray-300/50 font-sans flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        {/* Icon */}
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-linear-to-r from-gray-500 to-gray-600 shadow-lg shadow-gray-500/40 mb-6">
          <PackageX className="h-10 w-10 text-white" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Product Not Found
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the product you&apos;re looking for. It may have been removed or the link might be incorrect.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-200"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
        
        </div>
      </div>
    </div>
  );
}
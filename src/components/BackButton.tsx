import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  href?: string;
  label?: string;
}

export function BackButton({ href = '/', label = 'Back to Products' }: BackButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 mb-4 sm:mb-6 text-blue-500 hover:text-blue-600 font-semibold transition-colors group"
    >
      <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
      <span>{label}</span>
    </Link>
  );
}
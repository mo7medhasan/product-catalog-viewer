import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex-1 px-4 sm:px-6 py-3 bg-linear-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold shadow-lg shadow-red-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/60 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 text-sm sm:text-base"
    >
      {pending ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          Deleting...
        </>
      ) : (
        'Delete'
      )}
    </button>
  );
}
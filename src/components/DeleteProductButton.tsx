"use client";
import { useActionState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Trash2, AlertTriangle } from "lucide-react";
import { SubmitButton } from "./SubmitButton";
import { DeleteProductState } from "@/types/product.types";
import { deleteProduct } from "@/app/actions/deleteProduct";

interface DeleteProductButtonProps {
  productId: string;
}

const initialState: DeleteProductState = {
  error: undefined,
  success: undefined,
};

export function DeleteProductButton({ productId }: DeleteProductButtonProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const [state, formAction] = useActionState(deleteProduct, initialState);

  useEffect(() => {
    if (state.success) {
      dialogRef.current?.close();
      router.push("/");
    }
  }, [state.success, router]);

  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const modalBox = dialog.querySelector(".modal-box") as HTMLElement;
    if (!modalBox) return;

    const rect = modalBox.getBoundingClientRect();
    const { clientX, clientY } = e;

    const outside =
      clientX < rect.left ||
      clientX > rect.right ||
      clientY < rect.top ||
      clientY > rect.bottom;

    if (outside) closeModal();
  };

  return (
    <>
      <button
        onClick={openModal}
        type="button"
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-red-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/60 transition-all duration-200"
      >
        <Trash2 className="w-5 h-5" />
        Delete Product
      </button>

      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        className="backdrop:bg-black/40 backdrop:backdrop-blur-sm p-0 rounded-xl "
      >
        <div className="modal-box bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-200/20 max-w-md w-full">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-linear-to-r from-red-500 to-red-600 shadow-lg shadow-red-500/40 mb-6">
            <AlertTriangle className="h-8 w-8 text-white" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-3">
            Delete Product?
          </h3>

          <p className="text-gray-600 text-center mb-6 sm:mb-8 text-sm sm:text-base">
            Are you sure you want to delete this product? This action cannot be undone.
          </p>

          {state.error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm text-center">{state.error}</p>
            </div>
          )}

          {/* ✅ Form */}
          <form action={formAction} className="flex gap-3">
            <input type="hidden" name="productId" value={productId} />

            <button
              type="button"
              onClick={closeModal}
              className="flex-1 px-4 sm:px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-200 text-sm sm:text-base"
            >
              Cancel
            </button>

            <SubmitButton />
          </form>
        </div>
      </dialog>
    </>
  );
}

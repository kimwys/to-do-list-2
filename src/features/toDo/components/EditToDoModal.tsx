"use client";
import type { ToDo } from "@/src/features/toDo/types/toDo";
import EditToDoForm from "@/src/features/toDo/components/EditToDoForm";
import { EditToDoFormValues } from "@/src/features/toDo/schemas/editTodo.schema";
import { toast } from "sonner";
import { X } from "lucide-react";
import { useEffect } from "react";

type EditToDoModalProps = {
  toDo: ToDo;
  handleEdit: (toDo: ToDo) => void;
  onClose: () => void;
};
export default function EditToDoModal({
  toDo,
  handleEdit,
  onClose,
}: EditToDoModalProps) {
  function handleUpdate(data: EditToDoFormValues) {
    handleEdit({
      ...toDo,
      ...data,
    });
    toast.success("Update todo successfully!");
    onClose();
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 p-4">
      <div className="flex min-h-full items-center justify-center">
        <div className="relative w-full max-w-max max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 rounded p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
          >
            <X size={20} />
          </button>

          <h2 className="text-xl font-bold text-center text-header-primary">
            Update Todo Item
          </h2>

          <EditToDoForm
            defaultValues={{
              title: toDo.title,
              createdAt: toDo.createdAt,
              doneAt: toDo.doneAt || "",
              status: toDo.status,
            }}
            buttonName="Update"
            onSubmit={handleUpdate}
          />
        </div>
      </div>
    </div>
  );
}

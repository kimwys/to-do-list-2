"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import {
  editToDoSchema,
  EditToDoFormValues,
} from "@/src/features/toDo/schemas/editTodo.schema";
import Input from "@/src/components/Input";
import Button from "@/src/components/Button";
import DateInput from "@/src/components/DateInput";

type EditToDoFormProps = {
  defaultValues?: EditToDoFormValues;
  buttonName: string;
  onSubmit: (data: EditToDoFormValues) => Promise<void> | void;
};

export default function EditToDoForm({
  defaultValues,
  buttonName,
  onSubmit,
}: EditToDoFormProps) {
  const form = useForm<EditToDoFormValues>({
    resolver: zodResolver(editToDoSchema),
    defaultValues,
  });

  const handleSubmit = async (data: EditToDoFormValues) => {
    await onSubmit(data);
    form.reset();
  };
  const status = form.watch("status");
  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-500">Title:</label>
        <Input
          {...form.register("title")}
          error={form.formState.errors.title?.message}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-500">Created Date:</label>
        <Input
          {...form.register("createdAt")}
          disabled
          className="disabled:bg-gray-300/70"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-500">Completed Date:</label>
        <Controller
          control={form.control}
          name="doneAt"
          render={({ field }) => (
            <DateInput value={field.value} onChange={field.onChange} />
          )}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="font-semibold text-gray-500">Status:</div>

        <div className="flex items-center justify-center gap-2">
          <Button
            variant="active"
            type="button"
            onClick={() => form.setValue("status", "active")}
            className={
              status !== "active" ? "opacity-60 hover:opacity-100" : ""
            }
          >
            active
          </Button>
          <Button
            variant="pending"
            type="button"
            onClick={() => form.setValue("status", "pending")}
            className={
              status !== "pending" ? "opacity-60 hover:opacity-100" : ""
            }
          >
            pending
          </Button>
          <Button
            variant="closed"
            type="button"
            onClick={() => form.setValue("status", "closed")}
            className={
              status !== "closed" ? "opacity-60 hover:opacity-100" : ""
            }
          >
            closed
          </Button>
        </div>
      </div>

      <Button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="mt-2 justify-center"
        variant="update"
      >
        {buttonName}
      </Button>
    </form>
  );
}

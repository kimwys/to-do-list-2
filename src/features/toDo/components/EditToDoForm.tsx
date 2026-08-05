"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import {
  editToDoSchema,
  EditToDoFormValues,
} from "@/features/toDo/schemas/editTodo.schema";
import Input from "@/components/Input";
import { Button } from "@/components/ui/button";
import DateInput from "@/components/DateInput";
import { parse } from "date-fns";

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
  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-500" htmlFor="title">
          Title:
        </label>
        <Input
          id="title"
          {...form.register("title")}
          error={form.formState.errors.title?.message}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-500" htmlFor="createdAt">
          Created Date:
        </label>
        <Input
          id="createdAt"
          {...form.register("createdAt")}
          disabled
          className="disabled:bg-gray-300/70"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-500">Deadline Date:</label>
        <Controller
          control={form.control}
          name="doneAt"
          render={({ field }) => (
            <DateInput
              value={field.value}
              onChange={field.onChange}
              minDate={
                defaultValues?.createdAt
                  ? parse(defaultValues.createdAt, "dd - MM - yyyy", new Date())
                  : new Date()
              }
            />
          )}
        />
      </div>

      <Button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="mt-2"
        variant="update"
        size="toDoDefault"
      >
        {buttonName}
      </Button>
    </form>
  );
}

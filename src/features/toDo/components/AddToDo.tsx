import { Button } from "@/components/ui/button";
import Input from "@/components/Input";
import { Plus } from "lucide-react";
import { useState } from "react";
import DateInput from "@/components/DateInput";

type AddToDoProps = {
  onAdd: (title: string, deadline: string) => void;
};

export default function AddToDo({ onAdd }: AddToDoProps) {
  const [toDoTitle, setToDoTitle] = useState<string>("");
  const [toDoDeadline, setToDoDeadline] = useState<string>("");
  return (
    <div className="flex flex-col sm:items-center sm:justify-center mt-10 gap-5 sm:flex-row sm:gap-6">
      <Input
        placeholder="Add a new task..."
        value={toDoTitle}
        onChange={(e) => setToDoTitle(e.target.value)}
        className="sm:w-70 md:w-99"
      />

      <DateInput
        placeHolder="Deadline Date"
        value={toDoDeadline}
        onChange={setToDoDeadline}
        wrapperClassName="sm:w-43"
        minDate={new Date()}
      />

      <Button
        variant="add"
        size="toDoDefault"
        onClick={() => {
          onAdd(toDoTitle, toDoDeadline);
          setToDoTitle("");
          setToDoDeadline("");
        }}
        disabled={toDoTitle.trim() === ""}
      >
        <Plus strokeWidth={2} size={24} />
        add
      </Button>
    </div>
  );
}

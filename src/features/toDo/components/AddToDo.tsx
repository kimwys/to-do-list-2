import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import { Plus } from "lucide-react";
import type { Status } from "@/src/features/toDo/types/toDo";
import { useState } from "react";

type AddToDoProps = {
  onAdd: (title: string, status: Status) => void;
};

export default function AddToDo({ onAdd }: AddToDoProps) {
  const [toDoTitle, setToDoTitle] = useState<string>("");
  const [toDoStatus, setToDoStatus] = useState<Status>("active");
  return (
    <div className="flex flex-col items-center mt-10 gap-5 sm:flex-row sm:gap-6">
      <Input
        placeholder="Add a new task..."
        value={toDoTitle}
        onChange={(e) => setToDoTitle(e.target.value)}
        className="sm:w-99"
      />
      <div className="flex items-center gap-6">
        <Button
          variant="active"
          className={
            toDoStatus !== "active" ? "opacity-60 hover:opacity-100" : ""
          }
          onClick={() => setToDoStatus("active")}
        >
          active
        </Button>

        <Button
          variant="pending"
          className={
            toDoStatus !== "pending" ? "opacity-60 hover:opacity-100" : ""
          }
          onClick={() => setToDoStatus("pending")}
        >
          pending
        </Button>

        <Button
          variant="closed"
          className={
            toDoStatus !== "closed" ? "opacity-60 hover:opacity-100" : ""
          }
          onClick={() => setToDoStatus("closed")}
        >
          closed
        </Button>
      </div>
      <Button
        variant="add"
        className="w-full sm:w-auto gap-0.5 justify-center"
        onClick={() => {
          onAdd(toDoTitle, toDoStatus);
          setToDoTitle("");
        }}
        disabled={toDoTitle.trim() === ""}
      >
        <Plus strokeWidth={2} size={24} />
        add
      </Button>
    </div>
  );
}

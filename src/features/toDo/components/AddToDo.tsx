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
    <div className="flex items-center mt-[100px] gap-[24px]">
      <Input
        placeholder="Add a new task..."
        value={toDoTitle}
        onChange={(e) => setToDoTitle(e.target.value)}
        className="w-[396.66px]"
      />
      <div className="flex items-center gap-[24px]">
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

        <Button
          variant="add"
          onClick={() => {
            onAdd(toDoTitle, toDoStatus);
            setToDoTitle("");
          }}
          disabled={toDoTitle.trim() === ""}
        >
          <Plus color="#FEFEFB" strokeWidth={2} size={24} />
          add
        </Button>
      </div>
    </div>
  );
}

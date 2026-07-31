import type { ToDo } from "@/src/features/toDo/types/toDo";
import SmallBadge from "@/src/components/SmallBadge";
import Button from "@/src/components/Button";
import { SquarePen } from "lucide-react";
import { Trash2 } from "lucide-react";

type ToDoItemProps = {
  toDo: ToDo;
  onDelete: (id: string) => void;
  onEdit: (editedToDo: ToDo) => void;
};

export default function ToDoItem({ toDo, onDelete, onEdit }: ToDoItemProps) {
  return (
    <div
      className="rounded-[44px] 
        border-border-primary border
        py-3
        px-5
        grid grid-cols-[1fr_2.5fr_auto] 
        sm:px-9
        sm:grid-cols-[2fr_2fr_2fr_2fr_1fr] items-center"
    >
      <div className="justify-self-left flex items-center gap-1 min-w-0">
        <div className="rounded-[100px] w-5 h-5 border-4 border-add shrink-0" />

        <span className="truncate" title={toDo.title}>
          {toDo.title}
        </span>
      </div>

      <div className="hidden sm:block justify-self-center">
        {toDo.createdAt}
      </div>

      <div className="justify-self-center">{toDo.doneAt || "-"}</div>

      <div className="hidden sm:block justify-self-center">
        <SmallBadge variant={toDo.status}>{toDo.status}</SmallBadge>
      </div>

      <div className="flex gap-2 sm:gap-6.75 justify-self-center">
        <Button size="icon" onClick={() => onEdit(toDo)}>
          <SquarePen color="var(--color-pending)" size={20} />
        </Button>

        <Button size="icon" onClick={() => onDelete(toDo.id)}>
          <Trash2 color="var(--color-closed)" size={20} />
        </Button>
      </div>
    </div>
  );
}

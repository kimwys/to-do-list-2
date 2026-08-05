import type { ToDo } from "@/features/toDo/types/toDo";
import SmallBadge from "@/components/SmallBadge";
import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";
import { Trash2 } from "lucide-react";

type ToDoItemProps = {
  toDo: ToDo;
  onDelete: (id: string) => void;
  onEdit: (editedToDo: ToDo) => void;
  onToggleCompleted: (id: string, isCompleted: boolean) => void;
};

export default function ToDoItem({
  toDo,
  onDelete,
  onEdit,
  onToggleCompleted,
}: ToDoItemProps) {
  return (
    <div
      className="rounded-[44px] 
        border-border-primary border
        py-3
        px-5
        grid grid-cols-[1fr_2fr_auto] 
        items-center
        sm:px-9
        sm:grid-cols-[1fr_1fr_1fr_1fr]
        md:grid-cols-[2fr_2fr_2fr_2fr_1fr]"
    >
      <div className="justify-self-left flex items-center gap-1 min-w-0">
        <div className="rounded-[100px] w-5 h-5 border-4 border-add shrink-0" />

        <span className="truncate" title={toDo.title}>
          {toDo.title}
        </span>
      </div>

      <div className="hidden md:block justify-self-center">
        {toDo.createdAt}
      </div>

      <div className="justify-self-center">{toDo.doneAt || "-"}</div>

      <div className="hidden sm:block justify-self-center">
        <SmallBadge variant={toDo.status}>{toDo.status}</SmallBadge>
      </div>

      <div className="flex gap-2 sm:gap-4 items-center justify-self-center">
        <input
          type="checkbox"
          checked={toDo.status === "completed"}
          onChange={(e) => onToggleCompleted(toDo.id, e.target.checked)}
          className="w-4.5 h-4.5  cursor-pointer accent-completed"
        />
        <Button size="iconToDo" variant="ghost" onClick={() => onEdit(toDo)}>
          <SquarePen color="var(--color-pending)" className="size-5" />
        </Button>

        <Button
          size="iconToDo"
          variant="ghost"
          onClick={() => onDelete(toDo.id)}
        >
          <Trash2 color="var(--color-overdue)" className="size-5" />
        </Button>
      </div>
    </div>
  );
}

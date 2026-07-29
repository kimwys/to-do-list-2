import type { ToDo } from "@/src/features/toDo/types/toDo";
import SmallBadge from "@/src/components/SmallBadge";
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
        border-border-primary border-[1px] 
        px-[36px] py-[12px]
        grid grid-cols-[2fr_2fr_2fr_2fr_1fr] items-center"
    >
      <div className="justify-self-left flex items-center gap-1 min-w-0">
        <div className="rounded-[100px] w-[20px] h-[20px] border-[4px] border-add shrink-0" />

        <span className="truncate" title={toDo.title}>
          {toDo.title}
        </span>
      </div>

      <div className="justify-self-center">{toDo.createdAt}</div>

      <div className="justify-self-center">{toDo.doneAt || "-"}</div>

      <div className="justify-self-center">
        <SmallBadge variant={toDo.status} />
      </div>

      <div className="flex gap-[27px] justify-self-center">
        <button className="hover:cursor-pointer" onClick={() => onEdit(toDo)}>
          <SquarePen color="var(--color-pending)" size={19} />
        </button>

        <button
          className="hover:cursor-pointer"
          onClick={() => onDelete(toDo.id)}
        >
          <Trash2 color="var(--color-closed)" size={19} />
        </button>
      </div>
    </div>
  );
}

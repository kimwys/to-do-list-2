import type { ToDo } from "@/src/features/toDo/types/toDo";
import ToDoItem from "@/src/features/toDo/components/ToDoItem";
import Badge from "@/src/components/Badge";
import type { Status } from "@/src/features/toDo/types/toDo";

type ToDoListProps = {
  status: Status;
  toDoList: ToDo[];
  onDelete: (id: string) => void;
  onEdit: (editToDo: ToDo) => void;
};

export default function ToDoList({
  status,
  toDoList,
  onDelete,
  onEdit,
}: ToDoListProps) {
  return (
    <div className="flex flex-col gap-[8px] w-[1000px] mt-[25px]">
      <div className="flex items-center justify-center">
        <Badge variant={status} />
        <div className="h-px flex-1 bg-border-primary" />
      </div>

      <div
        className="grid grid-cols-[2fr_2fr_2fr_2fr_1fr] 
      items-center justify-items-center 
      px-[36px] text-foreground opacity-50"
      >
        <div />
        <div>fecha de creación</div>
        <div>fecha de entrega</div>
        <div>status</div>
        <div />
      </div>

      <div className="flex flex-col gap-[12px] w-[999px]">
        {toDoList.map((todo) => (
          <div key={todo.id}>
            <ToDoItem toDo={todo} onDelete={onDelete} onEdit={onEdit} />
          </div>
        ))}
      </div>
    </div>
  );
}

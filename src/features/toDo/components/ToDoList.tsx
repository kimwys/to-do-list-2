"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Badge from "@/src/components/Badge";
import Button from "@/src/components/Button";
import ToDoItem from "@/src/features/toDo/components/ToDoItem";

import type { Status, ToDo } from "../types/toDo";

type ToDoListProps = {
  status: Status;
  toDoList: ToDo[];
  onDelete: (id: string) => void;
  onEdit: (todo: ToDo) => void;
};

export default function ToDoList({
  status,
  toDoList,
  onDelete,
  onEdit,
}: ToDoListProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {/* ---------------- Mobile Header ---------------- */}
      <Button
        variant={status}
        onClick={() => setIsOpen((prev) => !prev)}
        className="justify-between sm:hidden"
      >
        <div>
          {`${status.charAt(0).toUpperCase()}${status.slice(1)}`} [
          {toDoList.length}]
        </div>

        <ChevronDown
          size={20}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Button>

      {/* ---------------- Desktop Header ---------------- */}
      <div className="hidden sm:flex items-center">
        <Badge variant={status}>{status}</Badge>
        <div className="h-px flex-1 bg-border-primary" />
      </div>

      {/* ------------- Desktop Table Header ------------- */}
      <div
        className="
          hidden
          sm:grid
          sm:grid-cols-[2fr_2fr_2fr_2fr_1fr]
          items-center
          justify-items-center
          px-9
          text-foreground
          opacity-50
        "
      >
        <div />
        <div>Created Date</div>
        <div>Deadline Date</div>
        <div>Status</div>
        <div />
      </div>

      {/* ---------------- Todo Items ---------------- */}
      <div
        className={`
          ${isOpen ? "flex" : "hidden"}
          flex-col
          gap-3
          sm:flex
        `}
      >
        {toDoList.map((todo) => (
          <ToDoItem
            key={todo.id}
            toDo={todo}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
}


// Cách 2: Mobile UI giống Desktop UI
// import type { ToDo } from "@/src/features/toDo/types/toDo";
// import ToDoItem from "@/src/features/toDo/components/ToDoItem";
// import SmallBadge from "@/src/components/SmallBadge";
// import type { Status } from "@/src/features/toDo/types/toDo";

// type ToDoListProps = {
//   status: Status;
//   toDoList: ToDo[];
//   onDelete: (id: string) => void;
//   onEdit: (editToDo: ToDo) => void;
// };

// export default function ToDoList({
//   status,
//   toDoList,
//   onDelete,
//   onEdit,
// }: ToDoListProps) {
//   return (
//     <div className="flex flex-col gap-2">
//       <div className="flex items-center justify-center">
//         <SmallBadge variant={status}>{status}</SmallBadge>
//         <div className="h-px flex-1 bg-border-primary" />
//       </div>

//       <div
//         className="
//         grid grid-cols-[2fr_10fr_1fr]
//         sm:grid-cols-[2fr_2fr_2fr_2fr_1fr]
//         items-center justify-items-center
//         px-9 text-foreground opacity-50"
//       >
//         <div></div>
//         <div className="hidden sm:block">Created Date</div>
//         <div>Deadline Date</div>
//         <div className="hidden sm:block">Status</div>
//         <div></div>
//       </div>

//       <div className="flex flex-col gap-3">
//         {toDoList.map((todo) => (
//           <div key={todo.id}>
//             <ToDoItem toDo={todo} onDelete={onDelete} onEdit={onEdit} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import { ToDo } from "@/src/features/toDo/types/toDo";
import ToDoHeader from "@/src/features/toDo/components/ToDoHeader";
import AddToDo from "@/src/features/toDo/components/AddToDo";
import ToDoList from "@/src/features/toDo/components/ToDoList";
import LoadingState from "@/src/components/LoadingState";
import useToDo from "@/src/features/toDo/hooks/useToDo";
import { useState } from "react";
import EditToDoModal from "@/src/features/toDo/components/EditToDoModal";

export default function Home() {
  const { toDoList, addToDo, deleteToDo, editToDo, isLoading } = useToDo();
  const [editingToDo, setEditingToDo] = useState<ToDo | null>(null);

  if (isLoading) {
    return <LoadingState message={"Đang tải dữ liệu..."} />;
  }

  const activeToDo = toDoList.filter((todo) => todo.status === "active");
  const pendingToDo = toDoList.filter((todo) => todo.status === "pending");
  const closedToDo = toDoList.filter((todo) => todo.status === "closed");

  return (
    <div className="ml-[220px] w-[1000px] py-[12px] mb-[50px]">
      <ToDoHeader />

      <AddToDo onAdd={addToDo} />

      <div className="flex flex-col gap-[26px]">
        <ToDoList
          status="active"
          toDoList={activeToDo}
          onDelete={deleteToDo}
          onEdit={setEditingToDo}
        />
        <ToDoList
          status="pending"
          toDoList={pendingToDo}
          onDelete={deleteToDo}
          onEdit={setEditingToDo}
        />
        <ToDoList
          status="closed"
          toDoList={closedToDo}
          onDelete={deleteToDo}
          onEdit={setEditingToDo}
        />
      </div>

      {editingToDo && (
        <EditToDoModal
          toDo={editingToDo}
          handleEdit={editToDo}
          onClose={() => setEditingToDo(null)}
        />
      )}
    </div>
  );
}

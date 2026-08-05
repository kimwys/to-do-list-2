"use client";
import { ToDo } from "@/features/toDo/types/toDo";
import ToDoHeader from "@/features/toDo/components/ToDoHeader";
import AddToDo from "@/features/toDo/components/AddToDo";
import ToDoList from "@/features/toDo/components/ToDoList";
import LoadingState from "@/components/LoadingState";
import useToDo from "@/features/toDo/hooks/useToDo";
import { useState } from "react";
import EditToDoModal from "@/features/toDo/components/EditToDoModal";

export default function Home() {
  const {
    toDoList,
    addToDo,
    deleteToDo,
    editToDo,
    markAsCompleted,
    isLoading,
  } = useToDo();
  const [editingToDo, setEditingToDo] = useState<ToDo | null>(null);

  if (isLoading) {
    return <LoadingState message={"Data is loading, please wait..."} />;
  }

  const activeToDo = toDoList.filter((todo) => todo.status === "active");
  const overdueToDo = toDoList.filter((todo) => todo.status === "overdue");
  const completedToDo = toDoList.filter((todo) => todo.status === "completed");

  return (
    <div className="w-full max-w-250 mx-auto px-4 py-8">
      <ToDoHeader />

      <AddToDo onAdd={addToDo} />

      <div className="flex flex-col gap-6.5 mt-10">
        <ToDoList
          status="active"
          toDoList={activeToDo}
          onDelete={deleteToDo}
          onEdit={setEditingToDo}
          onToggleCompleted={markAsCompleted}
        />
        <ToDoList
          status="overdue"
          toDoList={overdueToDo}
          onDelete={deleteToDo}
          onEdit={setEditingToDo}
          onToggleCompleted={markAsCompleted}
        />
        <ToDoList
          status="completed"
          toDoList={completedToDo}
          onDelete={deleteToDo}
          onEdit={setEditingToDo}
          onToggleCompleted={markAsCompleted}
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

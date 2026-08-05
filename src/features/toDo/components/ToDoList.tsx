"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";
import ToDoItem from "@/features/toDo/components/ToDoItem";

import type { Status, ToDo } from "../types/toDo";

type ToDoListProps = {
  status: Status;
  toDoList: ToDo[];
  onDelete: (id: string) => void;
  onEdit: (todo: ToDo) => void;
  onToggleCompleted: (id: string, isCompleted: boolean) => void;
};

export default function ToDoList({
  status,
  toDoList,
  onDelete,
  onEdit,
  onToggleCompleted,
}: ToDoListProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {/* ---------------- Mobile Header ---------------- */}
      <Button
        variant={status}
        size="toDoDefault"
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

      {/* ------------- Mobile Table Header ------------- */}
      <div
        className={`
        ${toDoList.length === 0 || !isOpen ? "hidden" : "grid grid-cols-[1fr_2fr_1fr]"}
        sm:hidden
        px-5
        text-foreground
        text-center
        opacity-50 
        `}
      >
        <div></div>
        <div>Deadline Date</div>
        <div></div>
      </div>

      {/* ---------------- Desktop Header ---------------- */}
      <div className="hidden sm:flex items-center">
        <Badge variant={status} className="min-w-35">
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
        <div className="h-px flex-1 bg-border-primary" />
      </div>

      {/* ------------- Desktop Table Header ------------- */}
      <div
        className="
          hidden
          sm:grid
          sm:grid-cols-[1fr_1fr_1fr_1fr]
          md:grid-cols-[2fr_2fr_2fr_2fr_1fr]
          items-center
          justify-items-center
          px-9
          text-foreground
          opacity-50
        "
      >
        <div />
        <div className="sm:hidden md:block">Created Date</div>
        <div>Deadline Date</div>
        <div>Status</div>
        <div />
      </div>

      {/* ---------------- Todo Items ---------------- */}
      <div
        className={`
          ${toDoList.length === 0 ? "hidden" : ""}
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
            onToggleCompleted={onToggleCompleted}
          />
        ))}
      </div>
    </div>
  );
}

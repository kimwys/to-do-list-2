import type { ToDo } from "@/features/toDo/types/toDo";
import { useState, useEffect } from "react";
import {
  getToDoList,
  saveToDoList,
} from "@/features/toDo/services/toDo.service";
import { v4 as uuid } from "uuid";
import { format, parse } from "date-fns";

export default function useToDo() {
  const [toDoList, setToDoList] = useState<ToDo[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    async function loadToDo() {
      const response = await getToDoList();
      setToDoList(response.data);
      setIsInitialized(true);
    }

    loadToDo();
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    async function saveToDo(toDoList: ToDo[]) {
      const response = await saveToDoList(toDoList);
    }

    saveToDo(toDoList);
  }, [toDoList, isInitialized]);

  useEffect(() => {
    const interval = setInterval(() => {
      setToDoList((prev) => checkOverdueTaskList(prev));
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  function checkOverdueTask(todo: ToDo): boolean {
    const currentDate = new Date();
    if (todo.status === "active" && todo.doneAt) {
      const deadlineDate = parse(todo.doneAt, "dd - MM - yyyy", new Date());
      if (deadlineDate < currentDate) {
        return true;
      }
    }
    return false;
  }

  function checkOverdueTaskList(list: ToDo[]): ToDo[] {
    let changed = false;
    const updated: ToDo[] = list.map((todo) => {
      if (checkOverdueTask(todo)) {
        changed = true;
        return { ...todo, status: "overdue" };
      }
      return todo;
    });
    return changed ? updated : list;
  }

  function addToDo(title: string, deadline?: string): void {
    const formattedDate = format(new Date(), "dd - MM - yyyy");
    const newToDo: ToDo = {
      id: uuid(),
      title,
      createdAt: formattedDate,
      doneAt: deadline || "",
      status: "active",
    };
    setToDoList((prev) => [newToDo, ...prev]);
  }

  function deleteToDo(id: string): void {
    setToDoList((prev) => prev.filter((todo) => todo.id !== id));
  }

  function editToDo(editedToDo: ToDo): void {
    setToDoList((prev) =>
      prev.map((todo) => {
        if (todo.id === editedToDo.id) {
          if (checkOverdueTask(editedToDo)) {
            return { ...editedToDo, status: "overdue" };
          }
          return editedToDo;
        }
        return todo;
      }),
    );
  }

  function markAsCompleted(id: string, isCompleted: boolean) {
    const formattedDate = format(new Date(), "dd - MM - yyyy");

    setToDoList((prev) =>
      prev.map((todo) => {
        if (todo.id !== id) return todo;

        if (isCompleted) {
          return {
            ...todo,
            status: "completed",
            doneAt: todo.doneAt || formattedDate,
          };
        }

        return {
          ...todo,
          status: checkOverdueTask({ ...todo, status: "active" })
            ? "overdue"
            : "active",
        };
      }),
    );
  }

  return {
    toDoList,
    addToDo,
    deleteToDo,
    editToDo,
    markAsCompleted,
    isLoading: !isInitialized,
  };
}

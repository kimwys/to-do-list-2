import type { ToDo, Status } from "@/src/features/toDo/types/toDo";
import { useState, useEffect } from "react";
import {
  getToDoList,
  saveToDoList,
} from "@/src/features/toDo/services/toDo.service";
import { v4 as uuid } from "uuid";

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

  function addToDo(title: string, status: Status) {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    const formattedDate = `${day} - ${month} - ${year}`;

    const newToDo: ToDo = {
      id: uuid(),
      title,
      createdAt: formattedDate,
      doneAt: "",
      status,
    };
    setToDoList((prev) => [newToDo, ...prev]);
  }

  function deleteToDo(id: string) {
    setToDoList((prev) => prev.filter((todo) => todo.id !== id));
  }

  function editToDo(editedToDo: ToDo) {
    setToDoList((prev) =>
      prev.map((todo) => (todo.id === editedToDo.id ? editedToDo : todo)),
    );
  }

  return {
    toDoList,
    addToDo,
    deleteToDo,
    editToDo,
    isLoading: !isInitialized,
  };
}

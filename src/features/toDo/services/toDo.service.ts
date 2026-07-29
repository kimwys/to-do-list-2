import type { ToDo } from "@/src/features/toDo/types/toDo";
import type { ApiResponse } from "@/src/types/apiResponse";
import mockDelay from "@/src/services/mockDelay.service";
import { loadLocalStorage, saveLocalStorage } from "@/src/utils/localStorage";

export async function getToDoList(): Promise<ApiResponse<ToDo[]>> {
  await mockDelay(1000);
  const data = loadLocalStorage<ToDo[]>("toDo", []);
  const apiResponse: ApiResponse<ToDo[]> = {
    data: data,
    message: "Get to do list successfully!",
  };
  return apiResponse;
}

export async function saveToDoList(
  toDoList: ToDo[],
): Promise<ApiResponse<string>> {
  await mockDelay(1000);
  try {
    saveLocalStorage<ToDo[]>("toDo", toDoList);
  } catch {
    const apiResponse: ApiResponse<string> = {
      data: "FAILED",
      message: "FAILED: Cannot save to do list!",
    };
    return apiResponse;
  }
  const apiResponse: ApiResponse<string> = {
    data: "SUCCESS",
    message: "SUCCESS: Save todo list successfully!",
  };
  return apiResponse;
}

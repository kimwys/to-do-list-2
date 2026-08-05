export type Status = "active" | "overdue" | "completed";
export type ToDo = {
  id: string;
  title: string;
  createdAt: string;
  doneAt?: string;
  status: Status;
};

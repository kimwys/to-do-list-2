export type Status = "active" | "pending" | "closed";
export type ToDo = {
  id: string;
  title: string;
  createdAt: string;
  doneAt?: string;
  status: Status;
};

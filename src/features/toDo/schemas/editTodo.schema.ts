import { z } from "zod";

export const editToDoSchema = z.object({
  title: z.string().trim().min(1, "Task must have at least 1 character."),
  createdAt: z.string(),
  doneAt: z.string().optional(),
  status: z.enum(["active", "pending", "closed"]),
});

export type EditToDoFormValues = z.infer<typeof editToDoSchema>;

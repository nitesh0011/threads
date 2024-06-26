import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z.string().max(200, { message: "Maximum 200 characters." }),
  images:z.string().optional(),
  accountId: z.string(),
});


export const CommentValidation= z.object({
  thread: z.string().min(3, { message: "Minimum 3 characters." }).max(200, { message: "Maximum 200 characters." }),
});
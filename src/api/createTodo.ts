import { API_URL } from "@/lib/constants";
import type { Todo } from "@/type/types";

export async function createTodo(content: string) {
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    body: JSON.stringify({
      content,
      isDone: false,
    }),
  });

  if (!response.ok) throw new Error("create Todo failed");

  const data: Todo = await response.json();
  return data;
}

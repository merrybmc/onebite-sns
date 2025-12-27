import { API_URL } from "@/lib/constants";

export async function fetchTodoById(id: string) {
  const response = await fetch(`${API_URL}/todos/${id}`);

  if (!response.ok) throw new Error("fetch failed");

  const data = await response.json();
  console.log("todobyid", data);
  return data;
}

import { fetchTodos } from "@/api/fetchTodos";
import { QUERY_KEYS } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export function useTodosData() {
  return useQuery({
    queryFn: fetchTodos,
    // queryKey: ["todos"],
    queryKey: QUERY_KEYS.todo.list,
    retry: 0,
  });
}

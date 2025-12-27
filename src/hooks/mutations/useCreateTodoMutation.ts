import { createTodo } from "@/api/createTodo";
import { QUERY_KEYS } from "@/lib/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {
      console.log("요청 시작");
    },
    onSettled: () => {
      console.log("요청 끝");
    },
    onSuccess: (data) => {
      // queryClient.invalidateQueries({ queryKey: ["todos"] });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.todo.list });
      console.log("data", data);
      console.log("요청 성공");
    },
    onError: (error) => {
      console.log("요청 실패", error.message);
    },
  });
}

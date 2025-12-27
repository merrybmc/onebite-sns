import { createTodo } from "@/api/createTodo";
import { useMutation } from "@tanstack/react-query";

export function useCreateTodoMutation() {
  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {
      console.log("요청 시작");
    },
    onSettled: () => {
      console.log("요청 끝");
    },
    onSuccess: (data) => {
      console.log("data", data);
      console.log("요청 성공");
    },
    onError: (error) => {
      console.log("요청 실패", error.message);
    },
  });
}

import React from "react";
import { Button } from "../ui/button";
import type { Todo } from "@/type/types";
import { useDeleteTodo } from "@/store/todos";

export default function TodoItem({ id, content }: Todo) {
  const deleteTodo = useDeleteTodo();

  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  return (
    <div className="flex items-center justify-between border p-2">
      {content}
      <Button variant={"destructive"} onClick={handleDeleteTodo}>
        삭제
      </Button>
    </div>
  );
}

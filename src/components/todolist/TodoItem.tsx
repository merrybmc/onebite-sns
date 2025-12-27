import React from "react";
import { Button } from "../ui/button";
import type { Todo } from "@/type/types";
// import { useDeleteTodo } from "@/store/todos";
import { Link } from "react-router";

export default function TodoItem({ id, content }: Todo) {
  // const deleteTodo = useDeleteTodo();

  const handleDeleteTodo = () => {
    // deleteTodo(id);
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <Link to={`/todolist/${id}`}>{content}</Link>
      <Button variant={"destructive"} onClick={handleDeleteTodo}>
        삭제
      </Button>
    </div>
  );
}

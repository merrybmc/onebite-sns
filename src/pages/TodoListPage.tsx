import { fetchTodos } from "@/api/fetchTodos";
import TodoEditor from "@/components/todolist/TodoEditor";
import TodoItem from "@/components/todolist/TodoItem";
import { useTodosData } from "@/hooks/queries/useTodos.data";
import { API_URL } from "@/lib/constants";
import { useTodos } from "@/store/todos";
import type { Todo } from "@/type/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function TodoListPage() {
  // const todos = useTodos();

  const { data: todos, isLoading, error } = useTodosData();

  if (error) return <div>오류가 발생했습니다.</div>;
  if (isLoading) return <div>로딩 중입니다...</div>;
  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoList</h1>
      <TodoEditor />
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
        // <TodoItem id={todo.id} content={todo.content} />
      ))}
    </div>
  );
}

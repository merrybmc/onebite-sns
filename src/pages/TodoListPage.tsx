import TodoEditor from "@/components/todolist/TodoEditor";
import TodoItem from "@/components/todolist/TodoItem";
import { useTodos } from "@/store/todos";
import React from "react";

export default function TodoListPage() {
  const todos = useTodos();
  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoList</h1>
      <TodoEditor />
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
        // <TodoItem id={todo.id} content={todo.content} />
      ))}
    </div>
  );
}

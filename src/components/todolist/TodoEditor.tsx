import React, { useState, type ChangeEvent } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import { createTodo } from "@/api/createTodo";
import { useCreateTodoMutation } from "@/hooks/mutations/useC reateTodoMutation";
// import { useCreateTodo } from "@/store/todos";

export default function TodoEditor() {
  // const createTodo = useCreateTodo();
  const { mutate, isPending } = useCreateTodoMutation();

  const [content, setContent] = useState("");

  // const handleOnchangeContent = (e) => {
  //   setContent(e.target.value);
  // };

  const handleAddTodo = () => {
    if (content.trim() === "") return;
    mutate(content);
    // createTodo(content);
  };

  return (
    <div className="flex gap-2">
      <Input
        placeholder="새로운 할 일을 입력하세요 ..."
        onChange={(e) => setContent(e.target.value)}
      />
      <Button disabled={isPending} onClick={handleAddTodo}>
        추가
      </Button>
    </div>
  );
}

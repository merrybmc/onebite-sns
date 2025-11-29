import React, { useState, type ChangeEvent } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useCreateTodo } from "@/store/todos";

export default function TodoEditor() {
  const createTodo = useCreateTodo();

  const [content, setContent] = useState("");

  // const handleOnchangeContent = (e) => {
  //   setContent(e.target.value);
  // };

  const handleAddTodo = () => {
    if (content.trim() === "") return;
    createTodo(content);
  };

  return (
    <div className="flex gap-2">
      <Input
        placeholder="새로운 할 일을 입력하세요 ..."
        onChange={(e) => setContent(e.target.value)}
      />
      <Button onClick={handleAddTodo}>추가</Button>
    </div>
  );
}

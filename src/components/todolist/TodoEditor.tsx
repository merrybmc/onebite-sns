import React, { useState, type ChangeEvent } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import { createTodo } from "@/api/createTodo";
// import { useCreateTodo } from "@/store/todos";

export default function TodoEditor() {
  // const createTodo = useCreateTodo();
  const { mutate, isPending } = useMutation({
    mutationFn: createTodo,
    // 요청이 시작되었을 때 실행
    onMutate: () => {
      console.log("요청 시작");
    },
    // 요청이 종료되었을 때 실행
    onSettled: () => {
      console.log("요청 종료");
    },
    // 요청이 성공되었을 때 실행
    onSuccess: (data) => {
      console.log("success data", data);
      window.location.reload();
    },
    // 요청이 실패했을 때 실행
    onError: (error) => {
      window.alert(error.message);
      window.alert("요청이 실패했습니다.");
    },
  });

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

import { useTodoDataById } from "@/hooks/queries/useTodoById.data";
import React from "react";
import { useParams } from "react-router";

export default function TodoDetailPage() {
  const params = useParams();

  const id = params.id;

  const { data, isLoading, error } = useTodoDataById(String(id));

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;

  console.log("data1", data);

  if (data) {
    console.log("data2", data);
  }

  return (
    <div>
      <p>id : {data?.id}</p>
      <p>content : {data?.content}</p>
    </div>
  );
}

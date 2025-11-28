import { useCount, useCountStore } from "@/store/count";
import React from "react";

export default function Viewer() {
  // const { count } = useCountStore();

  const count = useCount();

  return <div>{count}</div>;
}

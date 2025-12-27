import { useCount } from "@/store/count";

export default function Viewer() {
  const count = useCount();

  console.log("Viewer");

  return <div>{count}</div>;
}

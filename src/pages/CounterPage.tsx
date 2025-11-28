import Controller from "@/components/counter/controller";
import Viewer from "@/components/counter/Viewer";
import { Button } from "@/components/ui/button";
import { useCountStore } from "@/store/count";

export default function CounterPage() {
  // useCountStore 객체 형태의 store가 store에 할당됨
  // const store = useCountStore();

  // 구조분해할당도 가능
  const { count, increase, decrease } = useCountStore();

  // zustand는 컴포넌트에서 불러온 store 값들 중,
  // 하나라도 업데이트가 되면,

  return (
    // <div>
    //   <h1 className="text-2xl font-bold">Counter</h1>
    //   {/* <div>{count}</div> */}
    //   <div>
    //     <Button onClick={decrease}>-</Button>
    //     <Button onClick={increase}>+</Button>
    //   </div>
    // </div>
    <div>
      <Viewer />
      <Controller />
    </div>
  );
}

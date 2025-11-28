import {
  useCountStore,
  useDecreaseCount,
  useIncreaseCount,
} from "@/store/count";
import { Button } from "../ui/button";

export default function Controller() {
  // store에서 count를 포함한 모든 객체의 프로퍼티를 가져옴
  // count가 바뀌면 Controller 컴포넌트도 리렌더링됨
  // const { increase, decrease } = useCountStore();

  // 인수로 콜백함수를 전달하여 객체의 특정 프로퍼티만 반환 가능
  // Store로부터 특정 값만 선택할 수 있도록 도와주는걸 Selector
  // Selector를 통해 count 값을 가져오지 않아 count 값이 변경되어도
  // Controller 컴포넌트는 리렌더링되지 않음
  // const increase = useCountStore((store) => store.increase);
  // const decrease = useCountStore((store) => store.decrease);

  // Selector actions로 가져올 때
  // const { increase, decrease } = useCountStore((store) => store.actions);

  // custom Hook으로 가져올 때
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();

  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}

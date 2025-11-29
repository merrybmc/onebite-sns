import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type Store = {
  count: number;
  actions: {
    increase: () => void;
    decrease: () => void;
  };
};

// combine이 객체 형태의 Store를 생성
// 첫 번째 인수로 전달된 것은 state로 포함
// 두 번쨰 인수로 전달된 콜백함수의 반환값은 actions으로 포함
// combine 사용 이유 : combine의 첫 번째 인수로 전달된 state의 타입이 자동으로 추론됨
// 주의할 점 : combine은 첫 번째 인수로 전달된 State 값만 포함하는 타입으로 추론한다.
// export const useCountStore = create(
//   combine({ count: 0 }, (set, get) => ({
//     actions: {
//       increase: () => {
//         set((state) => ({
//           count: state.count + 1,
//         }));
//       },
//       decrease: () => {
//         set((state) => ({
//           count: state.count - 1,
//         }));
//       },
//     },
//   })),
// );

// 불변성 관리 immer
// npm i immer
// Store 내부의 특정 State를 업데이트할 때 직접적으로 접근해서 값을 바꾸는게 아닌
// 변경될 값을 포함한 새로운 객체를 만들어서 전달하여 업데이트하는 방식
// 업데이트해야할 데이터의 구조가 복잡해질경우 사용
export const useCountStore = create(
  immer(
    combine({ count: 0 }, (set, get) => ({
      actions: {
        increase: () => {
          set((state) => {
            state.count += 1;
          });
        },
        decrease: () => {
          set((state) => {
            state.count -= 1;
          });
        },
      },
    })),
  ),
);

// export const useCountStore = create<Store>((set, get) => {
//   return {
//     count: 0, // state

//     actions: {
//       increase: () => {
//         set((store) => ({
//           count: store.count + 1,
//         }));
//       },
//       decrease: () => {
//         set((store) => ({
//           count: store.count - 1,
//         }));
//       },
//     },
//   };
// });

// custom Hook

export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increase);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decrease);
  return decrease;
};

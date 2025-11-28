import { create } from "zustand";
// Store를 생성하는 역할
// 전역상태인 State와 Action 함수를 포함하는 객체

// get
// 현재 store 객체를 그대로 반환

// set
// 현재 store 객체의 값을 업데이트
// zustand의 set 메서드는 인수로 전달된 프로퍼티 값만 업데이트하고
// 명시되어있지 않은 프로퍼티는 유지시킨다.
// 함수형 업데이트도 지원

// type Store = {
//   count: number;
//   increase: () => void;
//   decrease: () => void;
// };

// Selector 묶어서 불러올 때 actions
type Store = {
  count: number;
  actions: {
    increase: () => void;
    decrease: () => void;
  };
};

// 다른 컴포넌트에서 useCountStore hook을 호출 가능
export const useCountStore = create<Store>((set, get) => {
  return {
    count: 0, // state
    actions: {
      increase: () => {
        // Action case 1
        // const count = get().count;
        // set({ count: count + 1 });

        // Action case 2 함수형 업데이트 (더 자주 사용, get을 쓸 필요 없음)
        set((store) => ({
          count: store.count + 1,
        }));
      },
      decrease: () => {
        set((store) => ({
          count: store.count - 1,
        }));
      },
    },
  };
});

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

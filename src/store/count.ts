import { create } from "zustand";
import { combine, subscribeWithSelector } from "zustand/middleware";
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
// export const useCountStore = create(
//   immer(
//     combine({ count: 0 }, (set, get) => ({
//       actions: {
//         increase: () => {
//           set((state) => {
//             state.count += 1;
//           });
//         },
//         decrease: () => {
//           set((state) => {
//             state.count -= 1;
//           });
//         },
//       },
//     })),
//   ),
// );

// Store의 특정 값을 구독함으로 값이 변경될 때마다 어떠한 기능을 추가로 수행
// useEffect와 비슷한 기능을 하는 middleware
export const useCountStore = create(
  subscribeWithSelector(
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
  ),
);

// 첫 번째 인수로 Store의 어떠한 값을 구독할건지를 결정하는 Selector 함수를 포함
// 두 번째 인수는 첫 번째 인수로 전달된 값이 변경될 때마다 실행되는 기능
// 콜백함수로 전달하며 인수는 첫 번째 인수는 변경된 이후의 구독한 값이 할당됨
// 두 번째 인수로 변경되기 전의 구독한 값이 할당됨
// 두 번째 인수의 콜백함수를 Listner 라고 표현한다.
// 로그인 후 마이페이지로 이동하는 등의 사이드 이펙트에 많이 활용됨
useCountStore.subscribe(
  (store) => store.count,
  (count, prevCount) => {
    // Listner
    console.log(count, prevCount);

    // 현재 Store를 불러오거나
    // 현재 Store의 특정 값을 업데이트 지원

    // 해당 Store의 프로퍼티를 반환
    const store = useCountStore.getState();
    // 현재 경우 store의 count를 구독하고 있어서 무한루프에 빠지게 됨
    // const myCount = store.count;
    // store.actions.increase();
    // store.actions.decrease();

    // 현재 Store의 특정 값을 업데이트
    useCountStore.setState((store) => {
      // 현재 경우 store의 count를 구독하고 있어서 무한루프에 빠지게 됨
      // store.count += 1;
    });
  },
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

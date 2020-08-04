import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer() {
  //useSelector는 리덕스 스토어의 상태를 조회하는 Hook이다.
  //state의 값은 store.getState() 함수를 호출 했을 때 나타나는 결과물과 동일하다.
  // const { number, diff } = useSelector((state) => ({
  //   number: state.counter.number,
  //   diff: state.counter.diff,
  // }));
  //ex1
  // const number = useSelector((state) => state.counter.number);
  // const diff = useSelector((state) => state.counter.diff);
  //ex2
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    //useSelector의 두번째 파라미터는 equalityFn인데 이전 값과 다음값을 비교하여 true가 나오면 리렌더링을 하지 않고 false가 나오면 리렌더링을 한다. shallowEqual은 react-redux에 내장되어 있는 함수로서, 객체 안의 가장 겉에 있는 값들을 모두 비교해준다.
    shallowEqual
  );

  //useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용 할 수 있게 해주는 Hook이다.
  const dispatch = useDispatch();
  //각 액션들을 디스패치하는 함수들
  //onIncrease = dispatch() 이런식으로 하면 Too many re-render 발생
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  //상태와 액션을 디스패치 하는 함수들을 props로 넣어준다.
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;

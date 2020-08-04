import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";
import { bindActionCreators } from "redux";

function ConnectCounterContainer({
  number,
  diff,
  increase,
  decrease,
  setDiff,
}) {
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={increase}
      onDecrease={decrease}
      onSetDiff={setDiff}
    />
  );
}

//mapStateToProps는 리덕스 스토어의 상태를 조회해서 어떤 것들을 props로 넣어줄지 정의한다.
//현재 리덕스 상태를 파라미터로 받아온다.
const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

//mapDispatchToProps는 액션을 디스패치하는 함수를 만들어서 props로 넣어준다.
//dispatch를 파라미터로 받아온다.
// const mapDispatchToProps = (dispatch) => ({
//   onIncrease: () => {
//     dispatch(increase());
//   },
//   onDecrease: () => {
//     dispatch(decrease());
//   },
//   onSetDiff: (diff) => {
//     dispatch(setDiff(diff));
//   },
// });
//bindActionCreastors(redux라이브러리내장)함수 사용 버젼
// const mapDispatchToProps = (dispatch) => {
//   bindActionCreators(
//     {
//       increase,
//       decrease,
//       setDiff,
//     },
//     dispatch
//   );
// };

//mapDispatchToProps가 함수가 아니라 객체면
//bindActionCreators를 connect에서 대신 해준다.
const mapDispatchToProps = {
  increase,
  decrease,
  setDiff,
};

//connect 함수에는 mapStateToProps, mapDispatchToProps를 인자로 넣어준다.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectCounterContainer);

import { useState } from "react";
import CounterButton from "./CounterButton";

function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count >= 1) setCount(count - 1);
  };
  return (
    <div>
      <h2 className="text-center">{count}</h2>
      <CounterButton increase={increase} decrease={decrease} />
    </div>
  );
}
export default Counter;

// import CounterButton from "./CounterButton";
// import { Card } from "react-bootstrap";
// import "./counter.css";
// import { useSelector, useDispatch } from "react-redux";
// import { incrementCount } from "../../redux/count";

// function Counter() {
//   const state = useSelector((state) => state.count);
//   const dispatch = useDispatch();
//   const increase = () => {
//     dispatch(incrementCount(1));
//   };
//   const decrease = () => {};
//   return (
//     <Card className="card">
//       <Card.Body className="d-flex juctify-content-center flex-column align-items-center">
//         <h2>{state}</h2>
//         <CounterButton state={state} increase={increase} decrease={decrease} />
//       </Card.Body>
//     </Card>
//   );
// }
// export default Counter;

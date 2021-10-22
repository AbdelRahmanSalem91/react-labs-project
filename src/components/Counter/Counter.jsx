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

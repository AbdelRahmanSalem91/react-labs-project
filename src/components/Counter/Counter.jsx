import { useState } from "react";
import { Card } from "react-bootstrap";
import CounterButton from "./CounterButton";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count >= 1) setCount(count - 1);
  };
  return (
    <Card className="card">
      <Card.Body className="d-flex juctify-content-center flex-column align-items-center">
        <h2>{count}</h2>
        <CounterButton increase={increase} decrease={decrease} />
      </Card.Body>
    </Card>
  );
}
export default Counter;

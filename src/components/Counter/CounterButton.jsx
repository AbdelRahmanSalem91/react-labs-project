const CounterButton = ({ state, increase, decrease }) => {
  return (
    <div className="container text-center">
      <h2 className="count">{state}</h2>
      <button className="btn btn-primary mx-1" onClick={increase}>
        increase
      </button>
      <button className="btn btn-danger mx-1" onClick={decrease}>
        decrease
      </button>
    </div>
  );
};

export default CounterButton;

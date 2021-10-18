const CounterButton = ({count,increase,decrease}) => {

   return (
       <div className="container">
           <h2 className="count">{count}</h2>
               <button onClick={increase}>increase</button>
               <button onClick={decrease}>decrease</button>
       </div>
   );
}

export default  CounterButton;
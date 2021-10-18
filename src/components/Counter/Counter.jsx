import { useState } from "react";
import CounterButton from "./CounterButton";

function Counter() {
   const[count,setCount]=useState(0);
   const increase =()=>{
   setCount(count+1)
   };
   const decrease =()=>{
     if (count>=1) setCount(count-1)
   };
   return (
     <div>
     <CounterButton count={count} increase={increase} decrease={decrease} />
     </div>
   );
   }
export default Counter;
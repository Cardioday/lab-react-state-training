import { useState } from "react";

function Counter() {

    const [counter, setCounter] = useState(0);

    const countUp = () => {
        setCounter(counter + 1);
    }

    const countDown = () => {
        if (counter > 0 ) {
        setCounter(counter - 1);
        }
    }

    return <div>
        <button onClick={countUp}>+</button>
        <span>{counter}</span>
        <button onClick={countDown}>-</button>
    </div>
}

export default Counter;
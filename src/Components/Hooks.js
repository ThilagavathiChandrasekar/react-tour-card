import React, { useState,useRef, useEffect,useReducer } from 'react';

  // useReducer 
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };


export const Hooks = () => {
    //use state
    const [count, setCount] = useState(0);
    //useref
    const inputRef = useRef(null);
    useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  //event
  const click = () => {
    alert("Good luck!");
  }

  return (
    <div>

        {/* use state */}
    <div>
        <h1>USE STATE</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>

    {/* useref */}
    <div>
        <h1>USEREF</h1>
      <input ref={inputRef} type="text" />
      <p> typing in the input.</p>
    </div>

    {/* use reducer */}
    <div>
        <h1>USE REDUCER</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        Decrement
      </button>
    </div>

    <h1>EVENT</h1>
    <button onClick={click}>Click the button</button>
    
    </div>
  )
}

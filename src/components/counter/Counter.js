import React from "react";
import {useSelector, useDispatch } from "react-redux";
import { COUNTER_KEY } from "../../redux/counterRedux/counter.reducer";
import {
  increaseCounter,
  decreaseCounter,
} from "../../redux/counterRedux/counter.actions";

const Counter = () => {
  let dispatch = useDispatch();

  // handle click events
  let increaseBtn = () => {
    dispatch(increaseCounter());
  };

  // handle click events
  let decreaseBtn = () => {
    dispatch(decreaseCounter());
  };

  let viewCounter = useSelector((state) =>{
    return state[COUNTER_KEY]

  })

  return (
    <React.Fragment>
      <div className="counter-wrapper">
        <div className="heading-wrapper">
          <header className="heading">Counter App</header>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <img
              src="./plus.jpg"
              alt="Increment"
              className="clickEffect"
              width="162px"
              onClick={increaseBtn}
            />
          </div>
          <div className="card">
            <span className="value">{viewCounter.counter}</span>
          </div>
          <div className="card">
            <img
              src="./minus.jpg"
              alt="Decrement"
              className="clickEffect"
              width="162px"
              onClick={decreaseBtn }
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
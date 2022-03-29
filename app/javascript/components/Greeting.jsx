import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getGreetings } from "../redux/greeting";
const Greeting = () => {
  const dispatch = useDispatch();
  const greet = useSelector((state) => state.greetingsReducer.greeting);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div>
      <h2>Random greet for you:</h2>
      <p>{greet}</p>
    </div>
  );
};

export default Greeting;

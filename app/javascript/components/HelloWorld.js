import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getGreetings } from "../redux/greeting";
const HelloWorld = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  const {
    greeting: { greeting },
  } = useSelector((state) => state.greetingsReducer);

  return <p>{greeting}</p>;
};

export default HelloWorld;

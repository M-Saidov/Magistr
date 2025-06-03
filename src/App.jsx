import React from "react";
import styles from "./components/styles/styles.css"
import {changeInit} from "./redux-state/reduces/initial"
import { useSelector, useDispatch } from "react-redux";

const { InitialText } = styles;

function App() {
  const dispatch = useDispatch();
  dispatch(changeInit());
  const isInit = useSelector(state => state.initial.init) ? '' : 'not';

  return (
    <>
      <InitialText>
        Welcome to the "template-1-usual"! <br /> Redux is {isInit} compilled
      </InitialText>
    </>
  );
}

export default App;

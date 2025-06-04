import React, {  useCallback, useEffect } from "react";
import Header from "./components/views/Header";
import Footer from "./components/views/Footer";
import Body from "./components/views/Body";
import mainCSS from "./components/styles/main.css";

import { setClientMode, setSectionPadding } from "./redux-state/reduces/initial"
import { useDispatch, useSelector } from "react-redux";


function App() {

  const dispatch = useDispatch();

  const recalcWindowSize = useCallback(() => {
    const newClientMode = window.innerWidth <= 992 ? 'mobile' : 'desktop';
    dispatch(setClientMode(newClientMode));
    
    const newSectionPadding = window.innerWidth <= 720 ? '20px' : 
    window.innerWidth <= 1120 ? '50px' : '100px';
    dispatch(setSectionPadding(newSectionPadding));
  }, [dispatch]);

  useEffect(() => {
    recalcWindowSize();
    
    window.addEventListener('resize', recalcWindowSize);
    return () => window.removeEventListener('resize', recalcWindowSize);
  }, [recalcWindowSize]);

  return (
    <>
      <Header/>
      <Body />
      <Footer/>
    </>
  );
}

export default App;

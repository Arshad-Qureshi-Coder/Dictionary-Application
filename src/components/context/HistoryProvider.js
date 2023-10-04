import React from "react";
import { useState } from "react";
import HistoryContext from "./HistoryContext";

const HistoryProvider = (props) => {
  const [history, setHistory] = useState([]);
  return (
    <HistoryContext.Provider value={{ history, setHistory }}>
      {props.children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
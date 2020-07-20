import parse from "csv-parse/lib/sync";
import React, { useState, useEffect, createContext } from "react";

export function loadPoliceKillings2016Data() {
  return fetch("/police-killings-2016.csv")
    .then((response) => response.text())
    .then((text) => parse(text, { columns: true }));
}

export const PoliceKillings2016Context = createContext();
export function PoliceKillings2016Provider(props) {
  const [killings, setkillings] = useState([]);
  useEffect(() => {
    loadPoliceKillings2016Data().then((PoliceKillings2016Data) => {
      setkillings(PoliceKillings2016Data);
    });
  });
  return (
    <PoliceKillings2016Context.Provider value={[killings, setkillings]}>
      {props.children}
    </PoliceKillings2016Context.Provider>
  );
}

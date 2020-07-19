import parse from "csv-parse/lib/sync";
import React, { useState, useEffect, createContext } from "react";
export const PoliceKillings2015Context = createContext();
export function loadPoliceKillings2015Data() {
  return fetch("/police-killings-2015.csv")
    .then((response) => response.text())
    .then((text) => parse(text, { columns: true }));
}

export function PoliceKillings2015Provider(props) {
  const [killings, setkillings] = useState([]);
  useEffect(() => {
    loadPoliceKillings2015Data().then((PoliceKillings2015Data) => {
      setkillings(PoliceKillings2015Data);
    });
  });
  return (
    <PoliceKillings2015Context.Provider value={[killings, setkillings]}>
      {props.children}
    </PoliceKillings2015Context.Provider>
  );
}

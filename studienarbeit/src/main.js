import React, { useEffect, useState } from "react";
import PoliceKillings2015Context from "./police-killings-context/police-killings-context-2015";
import loadPoliceKillings2015Data from "./police-killings-context/police-killings-context-2015";
import App from "./App";

export default function Main() {
  const [killings, setkillings] = useState([]);

  useEffect(() => {
    if (!killings || killings.length === 0) {
      loadPoliceKillings2015Data()
        .then((json) => {
          console.log("loading...", json);
          setkillings(json);
        })
        .catch((err) => {
          console.error(`Error: ${err}`);
        });
    }
  });

  return (
    <PoliceKillings2015Context.Provider value={[killings]}>
      <App />
    </PoliceKillings2015Context.Provider>
  );
}

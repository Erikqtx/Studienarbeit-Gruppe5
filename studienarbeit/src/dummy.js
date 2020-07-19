import React, { useContext } from "react";
import { PoliceKillings2015Context } from "./police-killings-context/police-killings-context-2015";
export default function Dummy() {
  const [killings, setkillings] = useContext(PoliceKillings2015Context);
  // return <h1>Dummy {JSON.stringify(druguse)} </h1>
  return <h1>Dummy {JSON.stringify(killings[0])} </h1>;
}

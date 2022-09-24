import React, { useState } from "react";
import IDE from "./components/editor";
import Container from "./components/styled/Container";
import useCompileLMC from "./hooks/useCompileLMC";
import Computer from "./components/computer";

const DEFAULT_VALUE = `//This is the code editor
//Use this space
//to write the LMC instructions
INP
STA A
INP
STA B
LDA A
SUB B
BRP isPositive
LDA B
OUT
HLT
isPositive LDA A
HLT
A DAT 3
B DAT`;

function App() {
  const [code, setCode] = useState<string>(DEFAULT_VALUE);
  const [computerValues, setComputerValues] = useState<string[][]>([]);
  //TODO make lines state, run useCompile when button clicked
  const { lines } = useCompileLMC(code);

  const sendToComputer = () => {
    setComputerValues(lines);
  };

  return (
    <Container>
      <IDE value={code} update={setCode} />
      <Computer lines={lines} />
    </Container>
  );
}

export default App;

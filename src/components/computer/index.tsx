import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useMakeRAM from "../../hooks/useMakeRAM";
import { Cycle } from "../../model/Cycle";

interface Props {
  lines: string[][];
}

const RAMContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 1px;
  background-color: black;
  border: 1px solid black;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const Address = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  & > strong {
    border-bottom: 1px solid black;
    width: 100%;
    text-align: center;
  }
  & > span {
    flex: 1;
    display: flex;
    align-items: center;
  }
`;

const MEMORY_SIZE = 100;

const Computer: React.FC<Props> = ({ lines }) => {
  const [cycle, setCycle] = useState(Cycle.FETCH);
  const [pc, setPC] = useState(0);
  const [acc, setAcc] = useState(0);
  const [adr, setAdr] = useState(0);
  const [ir, setIr] = useState(0);
  const [input, setInput] = useState(0);
  const instructions = useMakeRAM(lines, MEMORY_SIZE);

  useEffect(() => {}, [cycle]);

  useEffect(() => {}, [lines]);
  return (
    <Container>
      <div></div>
      <RAMContainer>
        {instructions.map((instruction, i) => (
          <Address>
            <strong>{i}</strong>
            <span>{instruction.padStart(3, "0")}</span>
          </Address>
        ))}
      </RAMContainer>
    </Container>
  );
};

export default Computer;

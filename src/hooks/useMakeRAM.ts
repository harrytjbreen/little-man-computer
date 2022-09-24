import { useEffect, useState } from "react";
import Instructions from "../model/Instructions";

const useMakeRAM = (lines: string[][], length: number) => {
  const [instructions, setInstructions] = useState<string[]>([]);

  useEffect(() => {
    const tempInstructions: string[] = [];
    lines.forEach((line) => {
      if (line[0] === "DAT") tempInstructions.push(line[1] ?? "000");
      else if (line[0] === "INP" || line[0] === "OUT" || line[0] === "HLT")
        tempInstructions.push(Instructions[line[0]] as string);
      //@ts-ignore
      else tempInstructions.push(Instructions[line[0]] + (line[1] ?? "00"));
    });
    setInstructions(
      tempInstructions.concat(Array(length).fill("0")).slice(0, length)
    );
  }, [lines, length]);

  return instructions;
};

export default useMakeRAM;

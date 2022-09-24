import { useEffect, useState } from "react";
import { DataLocation } from "../model/DataLocation";
import Keywords from "../model/Keywords";

const useCompileLMC = (code: string) => {
  const [lines, setLines] = useState<string[][]>([]);

  const lineIsVariable = (line: string[]): boolean => {
    let isVariable = true;
    for (const keyword of Keywords) {
      if (keyword === line[0]) isVariable = false;
    }
    return isVariable;
  };

  useEffect(() => {
    // separates lines into array, removes all comments and empty lines
    let tempLines: string[][] = code
      .split("\n")
      .filter((line) => line.substring(0, 2) !== "//" && line !== "")
      .map((line) => line.split(" "));

    let dataLocations: DataLocation[] = [];

    // Identifies all DAT locations, and their respective line nums
    tempLines.forEach((line, i) => {
      if (!lineIsVariable(line)) return;
      //TODO make sure that variables aren't protected words
      const num = i.toString();
      dataLocations.push([line[0], num]);
    });

    // Replaces DAT string names with their line numbers
    dataLocations.forEach((location) => {
      tempLines = tempLines.map((line) =>
        line.map((token) => (token === location[0] ? location[1] : token))
      );
    });

    tempLines.forEach((line) => {
      if (Keywords.includes(line[0])) return line;
      else line.shift();
    });

    setLines(tempLines);
  }, [code]);

  return { lines };
};

export default useCompileLMC;

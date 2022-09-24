import { monaco } from "react-monaco-editor";
import { editor, languages } from "monaco-editor";
import IMonarchLanguage = languages.IMonarchLanguage;
import IStandaloneThemeData = editor.IStandaloneThemeData;
import Keywords from "./Keywords";

export const options: monaco.editor.IStandaloneEditorConstructionOptions = {
  scrollbar: {
    vertical: "hidden",
    horizontal: "hidden",
  },
  minimap: {
    enabled: false,
  },
  renderLineHighlight: "none",
};

export const languageDef: IMonarchLanguage = {
  keywords: Keywords,
  tokenizer: {
    root: [
      [
        /@?[a-zA-Z][\w$]*/,
        {
          cases: {
            "@keywords": "keyword",
            "@default": "variable",
          },
        },
      ],
      [/".*?/, "string"],
      [/\/\//, "comment"],
    ],
  },
};

export const theme: IStandaloneThemeData = {
  colors: {
    "editor.foreground": "#000000",
  },
  inherit: true,
  base: "vs",
  rules: [
    { token: "keyword", foreground: "#FF6600", fontStyle: "bold" },
    { token: "comment", foreground: "#999999" },
    { token: "string", foreground: "#009966" },
    { token: "variable", foreground: "#006699" },
  ],
};

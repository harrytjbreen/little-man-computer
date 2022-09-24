import React from "react";
import * as monaco from "monaco-editor";
import { languageDef, theme, options } from "../../model/MonacoDefineLanguage";
import MonacoEditor from "react-monaco-editor";

interface Props {
  value: string;
  update: (str: string) => void;
}

const IDE: React.FC<Props> = ({ value, update }) => {
  const editorWillMount = () => {
    monaco.languages.register({ id: "lmc" });
    monaco.languages.setMonarchTokensProvider("lmc", languageDef);
    monaco.editor.defineTheme("lmc", theme);
  };

  return (
    <MonacoEditor
      language="lmc"
      theme="lmc"
      height={"100vh"}
      value={value}
      options={options}
      onChange={(newText) => update(newText)}
      editorWillMount={editorWillMount}
      editorDidMount={(editor) => {
        editor.focus();
      }}
    />
  );
};
export default IDE;

import { type FC, useState } from 'react';

import Editor from '@monaco-editor/react';

interface ICodeEditor {
  onChange: (arg0: string, arg1?: string) => void;
  language: string;
  code: string;
  theme: string;
}

const CodeEditor: FC<ICodeEditor> = ({ onChange, language = 'javascript', code, theme }) => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const [value, setValue] = useState<string>(code || '');

  const handleEditorChange = (incomingValue: string | undefined): void => {
    if (incomingValue !== undefined) {
      setValue(incomingValue);
      onChange(incomingValue);
    }
  };

  return (
    <Editor
      height="85vh"
      width="100%"
      language={language}
      value={value}
      theme={theme}
      defaultValue="// some comment"
      onChange={handleEditorChange}
    />
  );
};
export default CodeEditor;

import { type FC, useState, useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import CodeEditor from '../../entities/code-editor/CodeEditor';
import CodeEditorNavBar from '../../entities/code-editor/CodeEditorNavBar';
import { extractAlphabeticChars } from '../../shared/lib/stringCharactersExtractors';
import {
  parseCodeEditorLanguage,
  parseCodeEditorTheme,
} from '../../shared/lib/parseCodeEditorVitals';
import { defineCodeEditorTheme } from '../../shared/lib/defineCodeEditorTheme';

const BaseCodeEditor: FC = () => {
  const [code, setCode] = useState<string>('');

  const codeEditorSettings = useAppSelector((state) => state.CodeEditor);
  const { theme, language } = codeEditorSettings;

  const onCodeChange = (value: string): void => {
    setCode(value);
  };

  useEffect(() => {
    defineCodeEditorTheme(theme).catch(() => {});
  }, []);

  return (
    <>
      <CodeEditorNavBar
        lang={parseCodeEditorLanguage(language)}
        theme={parseCodeEditorTheme(theme)}
      />
      <CodeEditor
        theme={theme}
        language={extractAlphabeticChars(language)}
        code={code}
        onChange={onCodeChange}
      />
      ;
    </>
  );
};

export default BaseCodeEditor;

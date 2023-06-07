import { type FC, useEffect, useState } from 'react';
import CodeEditor from '../../entities/code-editor/CodeEditor';
import CodeEditorNavBar from '../../entities/code-editor/CodeEditorNavBar';
import { defineCodeEditorTheme } from '../../shared/lib/defineCodeEditorTheme';

const BaseCodeEditor: FC = () => {
  const [theme, setTheme] = useState<string>('twilight');
  const [language, setLanguage] = useState<string>('javascript');
  const [code, setCode] = useState<string>('');

  const onCodeChange = (value: string): void => {
    setCode(value);
  };

  const handleLanguageChange = (value: string): void => {
    setLanguage(value);
  };

  const handleThemeChange = (value: string): void => {
    setTheme(value);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async function fetchCodeEditorTheme() {
      try {
        await defineCodeEditorTheme('twilight');
        setTheme('twilight');
      } catch (_) {
        throw new Error('An error happened while fetching code editor theme. Try again please!');
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchCodeEditorTheme();
  }, []);

  return (
    <>
      <CodeEditorNavBar
        lang={language}
        handleLanguageChange={handleLanguageChange}
        handleThemeChange={handleThemeChange}
      />
      <CodeEditor theme={theme} language={language} code={code} onChange={onCodeChange} />;
    </>
  );
};

export default BaseCodeEditor;

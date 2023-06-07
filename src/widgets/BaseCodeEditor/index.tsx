import { type FC, useEffect, useState } from 'react';
import CodeEditor from '../../entities/CodeEditor';
import { defineCodeEditorTheme } from '../../shared/lib/defineCodeEditorTheme';

const BaseCodeEditor: FC = () => {
  const [theme, setTheme] = useState<string>('twilight');
  const [language, setLanguage] = useState<string>('javascript');
  const [code, setCode] = useState<string>('');

  const reactToChange = (): void => {
    console.log('react');
    setLanguage('javascript');
    setCode('asd');
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

  return <CodeEditor theme={theme} language={language} code={code} onChange={reactToChange} />;
};

export default BaseCodeEditor;

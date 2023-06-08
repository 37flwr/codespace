import { type FC, useEffect, useState } from 'react';
import CodeEditor from '../../entities/code-editor/CodeEditor';
import CodeEditorNavBar from '../../entities/code-editor/CodeEditorNavBar';
import editorLanguageOptions from '../../shared/constants/editorLanguageOptions';
import { defineCodeEditorTheme } from '../../shared/lib/defineCodeEditorTheme';
import editorThemeOptions from '../../shared/constants/editorThemeOptions';

const BaseCodeEditor: FC = () => {
  const [theme, setTheme] = useState<string>('twilight');
  const [language, setLanguage] = useState<string>('javascript63');
  const [languageTitle, setLanguageTitle] = useState<string>('Javascript');
  const [themeTitle, setThemeTitle] = useState<string>('Twilight');
  const [code, setCode] = useState<string>('');

  async function fetchCodeEditorTheme(newTheme: string = 'twilight'): Promise<any> {
    defineCodeEditorTheme(newTheme)
      .then(() => {
        setTheme(newTheme);
      })
      .catch(() => {
        console.log('error');
      });
  }

  const onCodeChange = (value: string): void => {
    setCode(value);
  };

  const handleLanguageChange = (value: string): void => {
    setLanguage(value);
  };

  const handleThemeChange = async (value: string): void => {
    await fetchCodeEditorTheme(value);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchCodeEditorTheme(theme);
  }, [theme]);

  useEffect(() => {
    const generateChosenLanguage = (lang: string): string => {
      const name = editorLanguageOptions.find(
        ({ value, id }) =>
          value === lang?.replace(/[^A-Za-z]/g, '') && id === Number(lang?.replace(/[^0-9]/g, '')),
      )?.name;

      if (name === undefined) {
        return language;
      }
      return name;
    };

    setLanguageTitle(generateChosenLanguage(language));
  }, [language]);

  useEffect(() => {
    const parsedThemeTitle = editorThemeOptions[theme as keyof typeof editorThemeOptions];

    if (parsedThemeTitle !== undefined) {
      setThemeTitle(parsedThemeTitle);
    } else {
      setThemeTitle('Twilight');
    }
  }, [theme]);

  return (
    <>
      <CodeEditorNavBar
        lang={languageTitle}
        theme={themeTitle}
        handleLanguageChange={handleLanguageChange}
        handleThemeChange={handleThemeChange}
      />
      <CodeEditor theme={theme} language={language} code={code} onChange={onCodeChange} />;
    </>
  );
};

export default BaseCodeEditor;

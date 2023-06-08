import { type FC, useEffect, useState } from 'react';
import CodeEditor from '../../entities/code-editor/CodeEditor';
import CodeEditorNavBar from '../../entities/code-editor/CodeEditorNavBar';
import { defineCodeEditorTheme } from '../../shared/lib/defineCodeEditorTheme';
import {
  extractNumericChars,
  extractAlphabeticChars,
} from '../../shared/lib/stringCharactersExtractors';
import editorLanguageOptions from '../../shared/constants/editorLanguageOptions';
import editorThemeOptions from '../../shared/constants/editorThemeOptions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { codeEditorActions } from '../../store/actions';

const BaseCodeEditor: FC = () => {
  const [code, setCode] = useState<string>('');

  const dispatch = useAppDispatch();
  const codeEditorSettings = useAppSelector((state) => state.CodeEditor);
  const { theme, language } = codeEditorSettings;

  const [languageTitle, setLanguageTitle] = useState<string>('Javascript');
  const [themeTitle, setThemeTitle] = useState<string>('Twilight');

  async function fetchCodeEditorTheme(newTheme: string = 'twilight'): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    defineCodeEditorTheme(newTheme)
      .then(() => {
        dispatch(codeEditorActions.changeTheme(newTheme));
      })
      .catch(() => {});
  }

  const onCodeChange = (value: string): void => {
    setCode(value);
  };

  const handleLanguageChange = (value: string): void => {
    dispatch(codeEditorActions.changeLanguage(value));
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
          value === extractAlphabeticChars(lang) && id === extractNumericChars(lang),
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

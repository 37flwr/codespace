import { loader } from '@monaco-editor/react';
import editorThemeOptions from '../constants/editorThemeOptions';

const defineCodeEditorTheme = async (theme: string = 'twilight'): Promise<void> => {
  const generatedTheme = Promise.all([
    loader.init(),
    import(
      `monaco-themes/themes/${editorThemeOptions[theme as keyof typeof editorThemeOptions]}.json`
    ),
  ])
    .then(([monaco, themeData]) => {
      // eslint-disable-next-line
      return monaco.editor.defineTheme(theme, themeData);
    })
    .catch(() => {
      throw new Error(
        'An error happened while generating theme for code editor. Try again please!',
      );
    });
  return generatedTheme;
};

export { defineCodeEditorTheme };

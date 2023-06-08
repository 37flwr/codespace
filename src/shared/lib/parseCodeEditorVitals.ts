import editorLanguageOptions from '../constants/editorLanguageOptions';
import editorThemeOptions from '../constants/editorThemeOptions';
import { extractAlphabeticChars, extractNumericChars } from './stringCharactersExtractors';

const parseCodeEditorTheme = (theme: string): string => {
  return editorThemeOptions[theme as keyof typeof editorThemeOptions];
};

const parseCodeEditorLanguage = (lang: string): string => {
  const name = editorLanguageOptions.find(
    ({ value, id }) => value === extractAlphabeticChars(lang) && id === extractNumericChars(lang),
  )?.name;

  if (name === undefined) {
    return 'Unknown';
  }
  return name;
};

export { parseCodeEditorTheme, parseCodeEditorLanguage };

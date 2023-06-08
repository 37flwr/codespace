import { type FC } from 'react';
import { DropdownTextButton } from '../../../shared/ui/buttons';
import CodeEditorLanguageFormContainer from '../../../widgets/forms/CodeEditor/CodeEditorLanguageForm/CodeEditorLanguageFormContainer';
import CodeEditorThemeFormContainer from '../../../widgets/forms/CodeEditor/CodeEditorThemeForm/CodeEditorThemeFormContainer';

interface ICodeEditorNavBar {
  lang: string;
  theme: string;
  handleThemeChange: (arg0: string) => void;
  handleLanguageChange: (arg0: string) => void;
}

const CodeEditorNavBar: FC<ICodeEditorNavBar> = ({
  lang,
  theme,
  handleLanguageChange,
  handleThemeChange,
}) => {
  return (
    <div className="code-editor__navbar">
      <div className="code-editor__navbar_container">
        <DropdownTextButton content={lang} customId="code-editor-lang">
          <CodeEditorLanguageFormContainer currentLang={lang} handleSubmit={handleLanguageChange} />
        </DropdownTextButton>
        <DropdownTextButton content={theme} customId="code-editor-theme">
          <CodeEditorThemeFormContainer currentTheme={theme} handleSubmit={handleThemeChange} />
        </DropdownTextButton>
      </div>
    </div>
  );
};

export default CodeEditorNavBar;

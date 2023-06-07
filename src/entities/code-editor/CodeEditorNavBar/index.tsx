import { type FC } from 'react';
import { DropdownTextButton } from '../../../shared/ui/buttons';
import CodeEditorThemeFormContainer from '../../../widgets/forms/CodeEditorLanguageForm/CodeEditorThemeFormContainer';

interface ICodeEditorNavBar {
  lang: string;
  handleThemeChange: (arg0: string) => void;
  handleLanguageChange: (arg0: string) => void;
}

const CodeEditorNavBar: FC<ICodeEditorNavBar> = ({ lang, handleLanguageChange }) => {
  return (
    <div className="code-editor__navbar">
      <div className="code-editor__navbar_container">
        <DropdownTextButton content={lang} customId="code-editor-lang">
          <CodeEditorThemeFormContainer currentLang={lang} handleSubmit={handleLanguageChange} />
        </DropdownTextButton>
      </div>
    </div>
  );
};

export default CodeEditorNavBar;

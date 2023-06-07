import { type FC } from 'react';
import { DropdownTextButton } from '../../../shared/ui/buttons';
import CodeEditorThemeFormContainer from '../../../widgets/forms/CodeEditorLanguageForm/CodeEditorThemeFormContainer';

interface ICodeEditorNavBar {
  lang: string;
  handleThemeChange: (arg0: string) => void;
  handleLanguageChange: (arg0: string) => void;
}

const CodeEditorNavBar: FC<ICodeEditorNavBar> = ({
  lang,
  handleThemeChange,
  handleLanguageChange,
}) => {
  return (
    <div className="code-editor__navbar">
      <div className="code-editor__navbar_container">
        <button
          onClick={() => {
            handleThemeChange('asd');
          }}
        >
          Theme Change
        </button>
        <DropdownTextButton content={lang} customId="code-editor-lang">
          <CodeEditorThemeFormContainer currentLang={lang} />
        </DropdownTextButton>
        <button
          onClick={() => {
            handleLanguageChange('asd');
          }}
        >
          Language handler
        </button>
      </div>
    </div>
  );
};

export default CodeEditorNavBar;

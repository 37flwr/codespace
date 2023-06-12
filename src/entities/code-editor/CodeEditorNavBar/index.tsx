import { type FC } from 'react';
import { DropdownTextButton } from '../../../shared/ui/buttons';
import CodeEditorLanguageFormContainer from '../../../widgets/forms/CodeEditor/CodeEditorLanguageForm/CodeEditorLanguageFormContainer';
import CodeEditorThemeFormContainer from '../../../widgets/forms/CodeEditor/CodeEditorThemeForm/CodeEditorThemeFormContainer';

interface ICodeEditorNavBar {
  lang: string;
  theme: string;
}

const CodeEditorNavBar: FC<ICodeEditorNavBar> = ({ lang, theme }) => {
  return (
    <div className="code-editor__navbar">
      <div className="code-editor__navbar_container">
        <DropdownTextButton variant="bordered" content={lang} customId="code-editor-lang">
          <CodeEditorLanguageFormContainer currentLang={lang} />
        </DropdownTextButton>
        <DropdownTextButton variant="bordered" content={theme} customId="code-editor-theme">
          <CodeEditorThemeFormContainer currentTheme={theme} />
        </DropdownTextButton>
      </div>
    </div>
  );
};

export default CodeEditorNavBar;

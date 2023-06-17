import { type FC } from 'react';
import { DropdownTextButton, RectangleButton } from '../../../shared/ui/buttons';
import CodeEditorLanguageFormContainer from '../../../widgets/forms/CodeEditor/CodeEditorLanguageForm/CodeEditorLanguageFormContainer';
import CodeEditorThemeFormContainer from '../../../widgets/forms/CodeEditor/CodeEditorThemeForm/CodeEditorThemeFormContainer';
import './styles.scss';

interface ICodeEditorNavBar {
  lang: string;
  theme: string;
  handleCompile: () => void;
}

const CodeEditorNavBar: FC<ICodeEditorNavBar> = ({ lang, theme, handleCompile }) => {
  return (
    <div className="code-editor__navbar">
      <div className="code-editor__navbar__left">
        <DropdownTextButton variant="bordered" content={lang} customId="code-editor-lang">
          <CodeEditorLanguageFormContainer currentLang={lang} />
        </DropdownTextButton>
        <DropdownTextButton variant="bordered" content={theme} customId="code-editor-theme">
          <CodeEditorThemeFormContainer currentTheme={theme} />
        </DropdownTextButton>
      </div>
      <div>
        <RectangleButton variant="filled" onClick={handleCompile}>
          Compile
        </RectangleButton>
      </div>
    </div>
  );
};

export default CodeEditorNavBar;

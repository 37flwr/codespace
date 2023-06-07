import { type FC } from 'react';

interface ICodeEditorNavBar {
  handleThemeChange: (arg0: string) => void;
  handleLanguageChange: (arg0: string) => void;
}

const CodeEditorNavBar: FC<ICodeEditorNavBar> = ({ handleThemeChange, handleLanguageChange }) => {
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

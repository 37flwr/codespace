import { type FC, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
// import useCodeState from '../../features/useCodeState';
import './styles.scss';
import CodeEditor from '../../entities/CodeEditor';
import { defineCodeEditorTheme } from '../../shared/lib/defineCodeEditorTheme';

const EditorPage: FC = () => {
  // const codeState = useCodeState();

  const language = 'javascript';
  const code = '// some comment';

  const reactToChange = (): void => {
    // setTestState(testState + 1);
  };

  const { theme } = useSelector((state: any) => state.Theme);
  const memoizedTheme = useMemo(() => theme, [theme]);

  const [codeEditorTheme, setCodeEditorTheme] = useState<string>('');

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async function fetchTheme() {
      try {
        await defineCodeEditorTheme('twilight');
        setCodeEditorTheme('twilight');
      } catch (err) {
        console.log(err);
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchTheme();
  }, []);

  if (codeEditorTheme === '') {
    return <h1>Loading</h1>;
  }

  return (
    <section className={classNames('editor-page', memoizedTheme)}>
      <CodeEditor
        theme={codeEditorTheme}
        language={language}
        code={code}
        onChange={reactToChange}
      />
      {/* <iframe
        srcDoc={codeState.doc}
        title="Output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="300px"
        height="300px"
      /> */}
    </section>
  );
};

export default EditorPage;

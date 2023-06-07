import { type FC, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import useCodeState from '../../features/useCodeState';
import './styles.scss';
import CodeEditor from '../../entities/CodeEditor';

const EditorPage: FC = () => {
  const codeState = useCodeState();

  const language = 'javascript';

  const code = '// some comment';

  const [testState, setTestState] = useState(0);

  const reactToChange = (): void => {
    setTestState(testState + 1);
  };

  const { theme } = useSelector((state: any) => state.Theme);
  const memoizedTheme = useMemo(() => theme, [theme]);

  return (
    <section className={classNames('editor-page', memoizedTheme)}>
      <CodeEditor theme={theme} language={language} code={code} onChange={reactToChange} />
      <iframe
        srcDoc={codeState.doc}
        title="Output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="300px"
        height="300px"
      />
    </section>
  );
};

export default EditorPage;

import { type FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import './styles.scss';
import BaseCodeEditor from '../../widgets/BaseCodeEditor';

const EditorPage: FC = () => {
  const { theme } = useSelector((state: any) => state.Theme);
  const memoizedTheme = useMemo(() => theme, [theme]);

  return (
    <section className={classNames('editor-page', memoizedTheme)}>
      <BaseCodeEditor />
    </section>
  );
};

export default EditorPage;

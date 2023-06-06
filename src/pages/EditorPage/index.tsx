import { useMemo } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import Editor from "../../entities/Editor";
import useCodeState from "../../features/useCodeState";
import "./styles.scss";

const EditorPage = () => {
  const codeState = useCodeState();

  const { theme } = useSelector((state: any) => state.Theme);
  const memoizedTheme = useMemo(() => theme, [theme]);

  return (
    <section className={classNames("editor-page", memoizedTheme)}>
      <div className="editors-group">
        <Editor setState={codeState.setters.html} lang="html" />
        <Editor setState={codeState.setters.css} lang="css" />
        <Editor setState={codeState.setters.js} lang="js" />
      </div>
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

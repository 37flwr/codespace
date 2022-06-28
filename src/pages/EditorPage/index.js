import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import Editor from '../../components/Editor';
import './styles.scss';

const EditorPage = () => {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>`)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  const { theme } = useSelector((state) => state.Theme)
  const memoizedTheme = useMemo(() => theme, [theme])

  return (
    <div className={classNames("editor-page", memoizedTheme)}>
      <div className="editors-group">
        <Editor value={html} setState={setHtml} lang='html' />
        <Editor value={css} setState={setCss} lang='css' />
        <Editor value={js} setState={setJs} lang='js' />
      </div>
      <iframe 
        srcDoc={srcDoc}
        title='Output'
        sandbox='allow-scripts'
        frameBorder='0'
        width='300px'
        height='300px'
      />
    </div>
  )
}

export default EditorPage
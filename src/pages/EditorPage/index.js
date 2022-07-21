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
    <section className={classNames("editor-page", memoizedTheme)}>
      <div className="editors-group">
        <Editor setState={setHtml} lang='html' />
        <Editor setState={setCss} lang='css' />
        <Editor setState={setJs} lang='js' />
      </div>
      <iframe 
        srcDoc={srcDoc}
        title='Output'
        sandbox='allow-scripts'
        frameBorder='0'
        width='300px'
        height='300px'
      />
    </section>
  )
}

export default EditorPage
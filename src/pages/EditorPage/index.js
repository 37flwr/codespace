import { useEffect, useState } from 'react';
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

  return (
    <div>
        <Editor value={html} setState={setHtml} lang='html' />
        <Editor value={css} setState={setCss} lang='css' />
        <Editor value={js} setState={setJs} lang='js' />
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
import { useCallback } from 'react';
import { createTheme } from '@uiw/codemirror-themes';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { tags as t } from '@lezer/highlight';
import './styles.scss'

const Editor = ({ setState, lang }) => {
    const onChange = useCallback((value, viewUpdate) => {
        setState(value)
    }, []);

    let extension;

    if(lang === 'html') {
        extension = [html()]
    } else if (lang === 'js') {
        extension = [javascript({ jsx: true })]
    } else if (lang === 'css') {
        extension = [css()]
    }

    const myTheme = createTheme({
        theme: 'light',
        settings: {
            background: 'none',
            foreground: 'none',
            caret: 'none',
            selection: 'transparent',
            lineHighlight: 'transparent',
            gutterBackground: 'transparent',
            gutterForeground: '#fff',
            outline: 'transparent'
        },
        styles: [
            { tag: t.comment, color: '#787b8099' },
            { tag: t.variableName, color: '#0080ff' },
            { tag: [t.string, t.special(t.brace)], color: '#5c6166' },
            { tag: t.number, color: '#5c6166' },
            { tag: t.bool, color: '#5c6166' },
            { tag: t.null, color: '#5c6166' },
            { tag: t.keyword, color: '#5c6166' },
            { tag: t.operator, color: '#5c6166' },
            { tag: t.className, color: '#5c6166' },
            { tag: t.definition(t.typeName), color: '#5c6166' },
            { tag: t.typeName, color: '#5c6166' },
            { tag: t.angleBracket, color: '#5c6166' },
            { tag: t.tagName, color: '#5c6166' },
            { tag: t.attributeName, color: '#5c6166' },
        ],
    })

    return (
        <div className="editor">
            <div className="editor-heading">
                {lang}
            </div>
            <CodeMirror
                value=''
                onChange={onChange}
                extensions={extension}
                theme={myTheme}
            />
        </div>
    )
}

export default Editor
import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';

const Editor = ({ value, setState, lang }) => {
    const onChange = React.useCallback((value, viewUpdate) => {
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

    return (
        <>
            <CodeMirror
                value=''
                onChange={onChange}
                extensions={extension}
                className='editor'
            />
        </>
    )
}

export default Editor
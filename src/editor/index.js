
import React from 'react';
import CodeEditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';


const Editor = ({ html, onChange }) => {

    return <CodeEditor
    className="language-js"
    value={html}
    onValueChange={code => onChange( code)}
    highlight={code => highlight(code, languages.js)}
    padding={10}
    style={{
      fontFamily: '"Fira code", "Fira Mono", monospace',
      fontSize: 14,
    }}
  />

}


export default Editor
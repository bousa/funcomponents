
import React from 'react';
import CodeEditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';


const Editor = ({ html, onChange }) => {

  return <div className="code-editor-container">

    
    <p className="note"><font color="red">*</font>You can edit this JSX code and see realtime updates</p>
    <CodeEditor
      className="language-js" 
      value={html}
      onValueChange={code => onChange(code)}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />

    </div>

    }
    
    
export default Editor
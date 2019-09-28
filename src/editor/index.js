
import React from 'react';
import CodeEditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import DropList from './droplist';
import funcomponents from '../funcomponents';


const Editor = ({ html, onChange }) => {


  const insertComp=(compName)=>{

    onChange(html + funcomponents[compName].sample)

  }

  return <div className="code-editor-container">

    
    <div className="toolbar">
    <span className="note"><font color="red">*</font>You can edit this JSX code and see realtime updates</span>
    <DropList onSelect={insertComp}/>
    </div>

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


    <div className="description">
      <i>by using React 16.8+ the feature of Hooks and function component made it easy to control and reuse components</i>
    </div>

    </div>

    }
    
    
export default Editor
import 'normalize.css'

import React, {  useState } from 'react'

import _ from 'lodash'
import Parser from '../jsxparser';
import Editor from '../editor';



function decodeHTMLEntities(text) {
    var entities = [
        ['amp', '&'],
        ['apos', '\''],
        ['#x27', '\''],
        ['#x2F', '/'],
        ['#39', '\''],
        ['#47', '/'],
        ['lt', '<'],
        ['gt', '>'],
        ['nbsp', ' '],
        ['quot', '"']
    ];

    for (var i = 0, max = entities.length; i < max; ++i)
        text = text.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);

    return text;
}




const CustomContent = ({ title }) => {

    const initCode = `
    <div> 
    <h3 className="title">${title}</h3>
    <Clickable afterClick="yup!" beforeClick="click me!" />
    <Counter start={1} step={4} />
    <Counter start={2} step={3} />
    <Cat name="gtitosho"/>
</div>
    `


    let [code, setCode] = useState(initCode)

    return <div className="customcontent">
        
    <Parser code={code} />

    <Editor html={code} onChange={content => {
            setCode(decodeHTMLEntities(content))
    }} />

    </div>
}

export default CustomContent
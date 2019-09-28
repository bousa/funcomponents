
import React from 'react'
import JsxParser from 'react-jsx-parser'
import funcomponents from '../funcomponents';

const Parser = ({code})=>{


    return  <JsxParser
    bindings={{
        by:"saphidev@gmail.com"
    }}
    components={{ ...funcomponents }}
    jsx={code}
/>
}


export default Parser
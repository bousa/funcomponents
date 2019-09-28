
import React from 'react'
import JsxParser from 'react-jsx-parser'
import funcomponents from '../funcomponents';
import _ from 'lodash'

const Parser = ({code})=>{

    // map funcomponents.KEY.Component ==> {KEY:Component}
    let components = _.reduce(_.keys(funcomponents),(obj,cur,index)=>{

        obj[cur] = funcomponents[cur].Component
        return obj

    },{})



    return  <JsxParser
    bindings={{
        by:"saphidev@gmail.com"
    }}
    components={components}
    jsx={code}
    
/>
}


export default Parser
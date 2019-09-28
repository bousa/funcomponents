import React,{useState} from 'react'

export default {
    Clickable:({ beforeClick,afterClick }) => {

        const [a,setA] = useState(beforeClick || "")

        return <p onClick={e=>setA(afterClick || "")}>{a}</p>
    },
    Counter:({ start,step }) => {
        const [a,setA] = useState(start)
        
        if(start == undefined || step == undefined) return <span>error!</span>

        

        return <button onClick={e=>setA(a + step)}>{a}</button>
    },
}
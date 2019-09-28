import React, { useState } from 'react'

export default {
    //Clickable Component
    Clickable: {
        Component: ({ beforeClick, afterClick }) => {

            const [a, setA] = useState(beforeClick || "")

            return <p onClick={e => setA(afterClick || "")}>{a}</p>
        },
        sample: `\n   <Clickable beforeClick="click me" afterClick="Yup!" />\n`
    },
    //Counter COMPONENT
    Counter: {

        Component: ({ start, step }) => {
            const [a, setA] = useState(start)

            if (start == undefined || step == undefined) return <span>error!</span>



            return <button onClick={e => setA(a + step)}>{a}</button>
        },
        sample: `\n   <Counter start={0} step={5} />\n`
    },
    //CAT COMPONENT
    Cat: {
        Component: ({ name }) => {

            return <pre>{`
    |\\---/|
    | o_o | ${name || ""}
     \\_^_/
            `}</pre>
        },
        sample: `\n   <Cat name="gtitosho" />\n`
    },


    Bhim: {
        Component: ({name})=><h1>{name} ya BHIM</h1>,
        sample: `\n   <Bhim name="hou"/>\n`
    },
}

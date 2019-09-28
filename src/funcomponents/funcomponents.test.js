import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from "enzyme";
import funcomponents from '.';



const renderCounter =(props)=>{
    return mount(
      <funcomponents.Counter {...props}/>
    )
}

const renderClickable =(props)=>{
    return mount(
      <funcomponents.Clickable {...props}/>
    )
}

describe('Counter component test', () => {

    it('should render an error when a prop missed', () => {
        let tree = renderCounter({
            start:0
        })
       expect(tree.find("button")).not.toExist()
    });


    it('should increment onClick', () => {

        let tree = renderCounter({
            start:0,
            step:5
        })

       expect(tree.find("button")).toExist()
       expect(tree.find("button")).toHaveText("0")
       tree.find("button").simulate("click")
       expect(tree.find("button")).toHaveText("5")
        
    });
    
});


describe('Clickable component test', () => {

    it('should change to afterClick text onclick', () => {

        let beforeClick = "click me!"
        let afterClick = "clicked"
        let tree = renderClickable({
            beforeClick,
            afterClick
        })

       expect(tree.find("p")).toExist()
       expect(tree.find("p")).toHaveText(beforeClick)
       tree.find("p").simulate("click")
       expect(tree.find("p")).toHaveText(afterClick)
        
    });
    
});
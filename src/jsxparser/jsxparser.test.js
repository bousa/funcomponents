import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from "enzyme";
import Parser from '.';

const renderParser =(props)=>{
    return mount(
      <Parser {...props}/>
    )
} 
  


describe("saphidev@gmail.com credit check",()=>{

    it("should render saphidev@gmail.com when using {by}",()=>{
      //given
      let tree = renderParser({
        code:`<p>{by}</p>`
      })
      //then
      expect(tree.find("p")).toHaveText("saphidev@gmail.com")
  
  
    })
  
  
})
  
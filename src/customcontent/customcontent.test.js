import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from "enzyme";
import CustomComponent from '.';

const renderCustomComponent =(props)=>{
    return mount(
      <CustomComponent {...props}/>
    )
} 
  


describe("create react rendered #bysafi",()=>{

    it("render <CustomComponent> with custom title",()=>{
      //given
      let tree = renderCustomComponent({
        title:"safi"
      })
      //then
      expect(tree.find("h3")).toHaveText("safi")
  
  
    })
  
  
})
  
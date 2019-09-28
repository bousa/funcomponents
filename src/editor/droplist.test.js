import React from 'react';
import {mount} from 'enzyme'
import DropList from "./droplist";
import funcomponents from '../funcomponents';
import _ from 'lodash'

const renderDropList =(props)=>{
    return mount(
      <DropList {...props}/>
    )
}



describe('Droplist render', () => {

    it('should render the same number of funcomponents', () => {

        let tree = renderDropList({
            onSelect:()=>{

            }
        })

        expect(tree.find(".dropdown-item")).toHaveLength(_.keys(funcomponents).length)

        
    });
});
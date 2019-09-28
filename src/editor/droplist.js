import React,{useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import funcomponents from '../funcomponents';
import _ from 'lodash'


const DropList = ({ onSelect }) => {
    let [open,setOpen] = useState(false)

    return <Dropdown isOpen={open} toggle={e=>setOpen(!open)}  size="sm">
        <DropdownToggle caret>
            Insert a FunComponent
        </DropdownToggle>
        <DropdownMenu>

            {
                _.keys(funcomponents).map((compName,index)=><DropdownItem onClick={e=>onSelect(compName)} key={index}>{compName}</DropdownItem>)
            }
            
        </DropdownMenu>
    </Dropdown>
}

export default DropList
import React from 'react'
import { useState } from 'react'
import {AiOutlineMenu, AiOutlineDown} from 'react-icons/ai';


export default function Dropdown({selected,setSelected}) {
    const options=['Fresh Meat','Vegetables','Fruit & Nut Gifts','Fresh Berries','Ocean Foods','Butter & Eggs','Fastfood','Fresh Onion','Papayaya & Crisps','Oatmeal','Fresh Bananas'];
    const [isActive, setIsActive]= useState(false);


  return (
    <div className='dd'>
        <div className='dd-btn' onClick={(e)=>{
            setIsActive(!isActive)
        }}>
            <AiOutlineMenu className='dd-icon'/>
            {selected}
            <span className='dd-icon'><AiOutlineDown/></span>
        </div>
        {isActive && (
            <div className='dd-content'>
                {options.map((option) =>(
                    <div onClick={(e)=>{ setSelected(option); setIsActive(false); }} className='dd-item'>
                     {option}
                     </div>
                ))}
            </div>
        )}

    </div>
  );
}

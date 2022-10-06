
import React from 'react'
import { useState } from 'react';
import Size from './Size';
import MultiRangeSlider from './MultiSliderRange';
import Filters from './Filters';

export default function Color({color}) {

  const [Bcolor,setColor]=useState(color);
  // const [size,setSize]=useState("none");
 
  const Colorhandel=(color)=>{
      if(color=="white"){
        setColor("white")
      }else if(color=="red"){
        setColor("red")
        console.log(color)
      }
      else if(color=="blue"){
        setColor("blue")
      }
      else if(color=="black"){
        setColor("black")
      }
      else if(color=="gray"){
        setColor("gray")
      }
      else if(color=="green"){
        setColor("green")
      }else{
        setColor("none")
      }
  }
  return (
    <div className='container'> 
          <div><Filters/></div>
          <div className='MultirangeRange'><MultiRangeSlider min={0} max={1000} color={Bcolor} onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}/> </div>
          <div className='row'>
            <div className='col-12 colors-page'>
              <h2>Colors</h2>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='colors'>
                    <div><input type="radio" value="white" name="color" id='white' onClick={()=>Colorhandel("white")}/> White </div>
                    <div><input type="radio" value="red" name="color"  id="red" onClick={()=>Colorhandel("red")}/> Red </div>
                    <div><input type="radio" value="blue" name="color" id='blue' onClick={()=>Colorhandel("blue")}/> Blue </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='colors'>
                    <div><input type="radio" value="gray" name="color" id='gray' onClick={()=>Colorhandel("gray")}/> Gray </div>
                    <div><input type="radio" value="black" name="color" id='black' onClick={()=>Colorhandel("black")}/> Black</div>
                    <div><input type="radio" value="green" name="color" id='green' onClick={()=>Colorhandel("green")}/> Green </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

import React, { useState } from 'react'
import Color from './Color'
import SaleOff from './SaleOff'
import ShopPage from './ShopPage'

export default function Size() {
  const [Size,setSize]=useState()

 const sizeHandler=(e)=>{
  if(e==="large"){
    setSize('large')
    
  }else if(e==="medium"){
    setSize('medium')
  }
  else if(e==="small"){
    setSize('small')
  }else{
    setSize('tiny')
  }

 }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='row'>

             <div className='col-md-4'>
                  <Color/>
                  <div className='size-page mt-5'>
                      <h2>Popular Size</h2>
                      <div className='sizes'>
                          <div onClick={()=>sizeHandler("large")} value="large">Large</div>
                          <div onClick={()=>sizeHandler("medium")} value="medium">Medium</div>
                          <div onClick={()=>sizeHandler("small")} value="small">Small</div>
                          <div onClick={()=>sizeHandler("tiny")} value="tiny">Tiny</div>
                      </div>
                  </div>
              </div>

              <div className='col-md-8'>
              <div> <SaleOff/> </div> 
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}

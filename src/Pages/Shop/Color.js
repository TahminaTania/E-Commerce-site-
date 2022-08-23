import React from 'react'

export default function Color() {
  return (
    <section>
      <div className='row mt-5'>
        <div className='col-md-12 colors-page'>
          <h2>Colors</h2>
          <div className='row'>
            <div className='col-md-6'>
              <div className='colors'>
                 <div><input type="radio" value="white" name="color" id='white' /> White </div>
                 <div><input type="radio" value="red" name="color"  id="red"/> Red </div>
                 <div><input type="radio" value="blue" name="color" id='blue'/> Blue </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='colors'>
                 <div><input type="radio" value="white" name="color" id='gray' /> Gray </div>
                 <div><input type="radio" value="red" name="color" id='black'/> Black</div>
                 <div><input type="radio" value="blue" name="color" id='green'/> Green </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </section>
  )
}

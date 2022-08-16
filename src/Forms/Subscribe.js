import React from 'react';
import './forms.css'

export default function Subscribe() {
  return (
    <div>
        <form>
            <div className='sbscrbFrm'>
            <input type="text" className="form-control" placeholder="Enter Your Email"  />
            <button type="submit" className="btn-green">Subscribe</button>
            </div>
        </form>
    </div>
  )
}

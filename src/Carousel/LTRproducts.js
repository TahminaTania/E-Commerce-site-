import React from 'react';
import { Rated, Rated2 ,Typed} from './LTRdata';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import './LTR.css'

export default function LTRproducts() {
  return (
    <section>
      <div className='container ltr'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
                {Typed.map((typed) => {
                    const { id,title} =typed;
                    return (
                      <div className='col-md-4 typed' key={id}>
                        <div><h3> {title}</h3></div>
                        <div className='arrows'>
                          <span><AiOutlineLeft/></span>
                          <span><AiOutlineRight/></span>
                        </div>            
                      </div>
                      );
                    })}
            </div>
            {/* secord row */}
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-4 letestP">     
                    {Rated.map((rate) => {
                    const { id,title,img,price} =rate;
                    return (
                      <div className='latest-box' key={id}>
                        <div className="rated-img">
                          <img src={img}></img>
                          </div>
                        <div className='rated-info'>
                          <div className="titleL">{title}</div>
                          <div className="priceL">${price}</div>
                        </div>            
                      </div>
                      );
                    })} 
                    </div>
                  </div>

                </div>
              </div>
            {/* secord row */}

          </div>
        </div>
      </div>
    </section>
  )
}

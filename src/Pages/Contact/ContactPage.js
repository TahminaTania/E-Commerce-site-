import React from 'react';
import './Contact.css'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import Map from './Map';
import SendMsg from '../../Forms/SendMsg'


export default function ContactPage() {
  return (
    <section>
        
        <div className='Shop-Cover d-flex align-items-center justify-content-center mb-5'>
          <div className=''>
            <h1 style={{ fontWeight: 'bolder'}}>Contact Us</h1>
            <div><span style={{ fontWeight: 'bolder'}}>Home- </span>Contact us</div>
          </div>
        </div>

        <div className='container'>
          <div className='row contacts text-center'>
            <div className='col-md-3'>
              <div className='d-flex justify-content-center icon'><BsFillTelephoneFill/></div>
              <div><h2>Phone</h2></div>
              <div><p>+01-3-8888-6868</p></div>
              </div>
            <div className='col-md-3'>
              <div className='d-flex justify-content-center icon'><GoLocation/></div>
              <div><h2>Address</h2></div>
              <div><p>60-49 Road 11378 New York</p></div>
            </div>
            <div className='col-md-3'>
            <div className='d-flex justify-content-center icon'><BiTimeFive/></div>
            <div><h2>Open Time</h2></div>
            <div><p>10:00 am to 23:00 pm</p></div>
            </div>
            <div className='col-md-3'>
            <div className='d-flex justify-content-center icon'><AiOutlineMail/></div>
            <div><h2>Email</h2></div>
            <div><p>hello@colorlib.com</p></div>
            </div>
          </div>

        </div>

        <div className='map'>
          <Map/>
        </div>
        <div className='send-msg'>
          <SendMsg/>

        </div>

    </section>
  )
}

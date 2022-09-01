import React from 'react'

export default function SendMsg() {
  return (
    <section>
       <div className='lv-msg'> <h2>Leave  Message</h2></div>
       <div className='container mt-5'>
        <form>
            <div className="row">
                <div className="col-6">
                <input type="text" className="form-control" placeholder="Your name"/>
                </div>
                <div className="col-6">
                <input type="email" className="form-control" placeholder="Your mail"/>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-md-12'>
                   <textarea class="form-control" placeholder="Your message" rows="5"></textarea>
                </div>

            </div>
            <div className='mt-3 text-center'>
               <button type="submit" class="btn-green mb-2 ">Send Message</button>
            </div>
        </form>
        </div>

    </section>
  )
}

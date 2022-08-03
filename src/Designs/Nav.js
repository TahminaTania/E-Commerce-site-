import React from 'react'

export default function Nav() {
  return (
    <section>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-3'>Menu</div>
                        <div className='col-md-6'>
                           <div class="input-group"> 
                              <select class="form-select">
                                    <option selected>All Cetagories</option>
                                    <option value="1">Fish</option>
                                    <option value="2">Meat</option>
                                    <option value="2">Veg</option>
                                    <option value="2">Dairy</option>
                               </select>
                              <input type="search" class="form-control" placeholder="What Do You Need? " aria-label="Search" aria-describedby="search-addon" />
                              <button type="button" class="btn btn-green">Search</button>
                            </div>
                        
                        </div>
                        <div className='col-md-3'> Contact</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

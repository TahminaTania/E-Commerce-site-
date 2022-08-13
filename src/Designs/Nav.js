import React from 'react';
import styled from 'styled-components';
import {AiOutlineMenu} from 'react-icons/ai';
import {BsFillTelephoneFill} from 'react-icons/bs';
import AllDept from './Top2/AllDept';

const Selections=styled.div`
width:100%;
height:60vh;
margin-top:10px;
`;
const AllDepartment=styled.div`
width:250px;
display:flex;
justify-content:space-between;
background-color: rgb(97, 153, 14);
padding:10px;
`;

export default function Nav() {
  return (

    <Selections className='mb-5'>
        <div className='container navC' >
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <AllDept/>        
                        </div>
                        <div className='col-md-9'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='row'>
                                      <div className='col-md-9'>
                                          <div class="input-group"> 
                                                <select class="form-select-sm px-2 Allcatag">
                                                        <option selected>All Cetagories</option>
                                                        <option value="1">Fish</option>
                                                        <option value="2">Meat</option>
                                                        <option value="2">Veg</option>
                                                        <option value="2">Dairy</option>
                                                </select>
                                                <input type="search" class="form-control" placeholder="What Do You Need? " aria-label="Search" aria-describedby="search-addon" />
                                                <button type="button" class="btn-green">Search</button>
                                            </div>          
                                        </div>
                                        <div className='col-md-3 contact'>
                                            <div className='phn-icon'>
                                                <BsFillTelephoneFill/>
                                            </div>
                                            <div className='cust-Serv'>
                                                <h5>+65 11.188.888</h5>
                                                <p>support 24/7 time</p>
                                            </div>
                             
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className='row cover'>
                                <div className='col-md-12'>
                                    <div className='nav-img'>
                                        <div className='cover-elements'>
                                            <h6>FRUIT FRESH</h6>
                                            <h2>Vegetable <br/>100% Organic</h2>
                                            <p>Free Pickup and Delivery Available</p>
                                            <a href="#" class="btn-green">SHOP NOW</a>
                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </Selections>
  )
}


import React from 'react';
import styled from 'styled-components';
import {AiOutlineMenu} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'

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

    <Selections>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <AllDepartment>
                            <AiOutlineMenu/>
                             <select className='departments-select'>
                                    <option selected>All Departments</option>
                                    <option value="1">Fish</option>
                                    <option value="2">Meat</option>
                                    <option value="2">Veg</option>
                                    <option value="2">Dairy</option>
                               </select>
                          
                             
                            </AllDepartment>
                        </div>
                        <div className='col-md-6'>
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
        </div>
    </Selections>
  )
}

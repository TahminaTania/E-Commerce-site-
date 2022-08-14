import React from 'react';
import './Blog.css';
import { FaRegComment , FaRegCalendarAlt } from 'react-icons/fa';
import blog1 from "../../../src/Bannaer/Blig-item1.webp"
import blog2 from '../../../src/Bannaer/Blog_item2.webp';
import blog3 from '../../../src/Bannaer/Blog-item3.webp';



export default function Blog() {
  return (
    <section>
        <div className='container blogs'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='blog1'>
                                <div className='blog-pic'>
                                    <img src={blog1}></img>

                                </div>
                                <div className='blog-text'>
                                    <ul>
                                        <li><i><FaRegCalendarAlt/> </i>"May 4, 2019 "</li>
                                        <li><i><FaRegComment/></i> "5"</li>
                                    </ul>
                                    <h5><a href='#'>Cooking tips make cooking simple </a></h5>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='blog2'>
                                <div className='blog-pic'>
                                    <img src={blog2}></img>

                                </div>
                                <div className='blog-text'>
                                    <ul>
                                        <li><i><FaRegCalendarAlt/> </i>"May 4, 2019 "</li>
                                        <li><i><FaRegComment/></i> "5"</li>
                                    </ul>
                                    <h5><a href='#'>6 ways to prepare breakfast for 30 </a></h5>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaera</p>
                                </div>  
                            </div>
                        </div>
                        <div className='col-md-4'>
                          <div className='blog3'>
                               <div className='blog-pic'>
                                <img src={blog3}></img>

                               </div>
                                <div className='blog-text'>
                                    <ul>
                                        <li><i><FaRegCalendarAlt/> </i>"May 4, 2019 "</li>
                                        <li><i><FaRegComment/></i> "5"</li>
                                    </ul>
                                    <h5><a href='#'>Visit the clean farm in the US </a></h5>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
                                </div>
                          </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

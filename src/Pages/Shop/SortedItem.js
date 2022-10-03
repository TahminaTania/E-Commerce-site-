import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sortedData from './Saledata'
import {MdOutlineFavoriteBorder, MdOutlineShoppingCart , MdOutlineSearch} from 'react-icons/md';
import Slider from "react-slick";

export default function SortedItem() {
const sortedSlide = () =>
  sortedData.map((sale) => (
// const { id,title,price,img,category } = sale;
    <div className=' m-5' key={sale.id}>
                    <div className='sorted-items' >
                        <div className='sorted-box'>
                          <div className="image-box"><img src={sale.img} alt={sale.title}/></div>
                            <div className='items-icon'>
                                  <MdOutlineFavoriteBorder className='icn'/>
                                  <MdOutlineSearch className='icn'/>
                                  <MdOutlineShoppingCart className='icn'/>
                            </div> 
                         </div>
                          <div className='shorted-infobox mt-1'>
                            <div className='name text-center'>{sale.title}</div>
                            <div className='sorted-price text-center '>${sale.price}</div>
                         </div> 
                     </div> 
                     </div>
    
));

return (
<div>
<div className="mb-5">

  <Slider
    dots={true}
    slidesToShow={3}
    slidesToScroll={3}
    autoplay={true}
    autoplaySpeed={3000}
    rows= {3}
    // min_rows= {1}
    // coloums={4}
  >

    {sortedSlide()}
  </Slider>
</div>
</div>
);
}


import React from "react";
import saleoff from './Saledata';
import {MdOutlineFavoriteBorder, MdOutlineShoppingCart , MdOutlineSearch} from 'react-icons/md';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Foundprd from "./Foundprd";

export default function SaleOff() {
  const renderSlides = () =>
    saleoff.map((sale) => (
    // const { id,title,price,img,category } = sale;
        <div className='mb-5' key={sale.id}>
                        <div className='saleoff-box' >
                            <div className='sale-box'>
                             <div className='off-per'>-20%</div>
                              <img src={sale.img} alt={sale.title} className=''/>
                              <div className='sale-icon'>
                                     <MdOutlineFavoriteBorder className='icn'/>
                                     <MdOutlineSearch className='icn'/>
                                     <MdOutlineShoppingCart className='icn'/>
                                 </div> 
                             </div>
                               <div className='saleoff-info mt-3'>
                                  <div className='category text-center'>{sale.category}</div>
                                  <div className='name text-center'>{sale.title}</div>
                                 <div className='price text-center '>${sale.price} <span>${sale.price}</span></div>
                             </div> 
                         </div> 
                         </div>
        
    ));

  return (
    <div>
    <div className=" sale-page mb-5">

        <div className="mb-5">
          <div className="saleoff-header"><h1>Sale Off</h1></div>
          <div className='line'></div>         
        </div>
      <Slider
        dots={true}
        slidesToShow={3}
        slidesToScroll={3}
        autoplay={true}
        autoplaySpeed={3000}
      >

        {renderSlides()}
      </Slider>
    </div>
    <Foundprd/>
    </div>
  );
}





// import React from 'react';
// import saleoff from './Saledata';
// import {MdOutlineFavoriteBorder, MdOutlineShoppingCart , MdOutlineSearch} from 'react-icons/md';


// export default function SaleOff() {
//   return (
//     <section>
//         <div className='sale-page'>
//             <div>
//               <div><h1>Sale Off</h1></div>
//               <div className='underline'></div>
//             </div>
//             <div className='saleoff-cont'>
//             {saleoff.map((sale) => {
//                     const { id,title,price,img,category } = sale;
//                     return (
//                       <div className='' key={id}>
//                         <div className='saleoff-box' >
//                             <div className='sale-box'>
//                               <div className='off-per'>-20%</div>
//                                 <img src={img} alt={title} className=''/>
//                                  <div className='sale-icon'>
//                                     <MdOutlineFavoriteBorder className='icn'/>
//                                     <MdOutlineSearch className='icn'/>
//                                     <MdOutlineShoppingCart className='icn'/>
//                                 </div> 
//                             </div>
//                               <div className='saleoff-info mt-3'>
//                                  <div className='category text-center'>{category}</div>
//                                  <div className='name text-center'>{title}</div>
//                                 <div className='price text-center '>${price} <span>${price}</span></div>
//                             </div> 
//                         </div> 
                          
                        
//                       </div>
//                       );
//                     })}
              
//             </div>

//         </div>
//     </section>
//   )
// }




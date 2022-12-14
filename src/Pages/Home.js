import React from 'react';
import Slider from '../Designs/SideBar/Slider';
import Nav from '../Designs/Nav';
import Products from '../Items/Products';
import Break from '../Designs/Top2/Break';
import AllDept from '../Designs/Top2/AllDept';
import Motion from '../Designs/SideBar/Motion';
import Blog from '../Designs/Blog/Blog';
import LTRproducts from '../Carousel/LTRproducts';
import SaleOff from './Shop/SaleOff';

export default function Home() {
  return (
    <section>
        <Nav/>
        <Motion/>
        <Products/>
       <LTRproducts/>
        <Blog/>
    </section>
  )
}

import React from 'react';
import Products from '../../Items/Products';
import cover from '../../Bannaer/breadcrumb.jpg.webp';
import './ShopPage.css'
import Filters from './Filters';
import Size from './Size';
// import SaleOff from './SaleOff';

export default function ShopPage() {
  return (
    <div>
        <div className='Shop-Cover d-flex align-items-center justify-content-center mb-5' >
          <div className=''>
            <h1 style={{ fontWeight: 'bolder'}}>Organi Shop</h1>
            <div><span style={{ fontWeight: 'bolder'}}>Home- </span>Shop</div>
          </div>
        </div>
        
        <div>
          <Size/>
        </div>
    </div>
  )
}

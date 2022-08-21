import React from 'react';
import Products from '../../Items/Products';
import cover from '../../Bannaer/breadcrumb.jpg.webp';
import './ShopPage.css'
import Filters from './Filters';

export default function ShopPage() {
  return (
    <div>
        <div className='Shop-Cover d-flex align-items-center justify-content-center mb-5' style={{ backgroundImage: {cover} }}>
          <div className=''>
            <h1 style={{ fontWeight: 'bolder'}}>Organi Shop</h1>
            <div><span style={{ fontWeight: 'bolder'}}>Home- </span>Shop</div>
          </div>
        </div>
        
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'><Filters/></div>
            <div className='col-md-9'></div>
          </div>

        </div>

    </div>
  )
}

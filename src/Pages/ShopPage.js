import React from 'react';
import Products from '../Items/Products';

export default function ShopPage() {
  return (
    <div>
        <h1 className='mb-5' style={{ color: 'blue'}}> This is our Shop Page</h1>
        <div className='mt-5'>
            <Products/>

        </div>
    </div>
  )
}

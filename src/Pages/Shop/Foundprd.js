import React from 'react';
import menu from '../../Items/data';
import {AiOutlineUnorderedList} from 'react-icons/ai';
import {BsFillGridFill} from 'react-icons/bs';
import SortedItem from './SortedItem';

export default function Foundprd() {
  return (
    <section>
        <div className='found-product'>
            <div className='row mt-5'>
                <div className='col-md-5 sortBy'>
                    <span style={{marginRight:'15px' }}>Sort By :</span>
                    <select>
                       <option value="A">Default</option>
                       <option value="B">Top Score</option>
                    </select>
                </div>
                <div className='col-md-4'><span style={{fontWeight:'bolder' }}>{menu.length} </span> Products Found</div>
                <div className='col-md-3 d-flex flex-row-reverse'>
                    <div className='icon'><AiOutlineUnorderedList/></div>
                    <div className='icon'><BsFillGridFill/></div>
                </div>
            </div>
            <div>
               <SortedItem/>
            </div>

        </div>
    </section>
  )
}

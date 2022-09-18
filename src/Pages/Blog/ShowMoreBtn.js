import React,{useState} from 'react';
import {BsArrowRight} from 'react-icons/bs'

export default function ShowMoreBtn({description}) {
    const [showMore, setShowMore] = useState(false);
  return (
    <div>
        <div onClick={() => setShowMore(!showMore)}> 
            <div> {showMore ? description : `${description.substring(0,30)}`}</div>
            <div className="mt-3 show-btn">{showMore? 'Show Less': 'Show More'} <span><BsArrowRight/></span></div>
        </div>
    </div>
  )
}

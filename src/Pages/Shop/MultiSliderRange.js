import React from "react";
import './MultiRange.css';
import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { useCallback, useEffect } from "react";
import classnames from "classnames";
import styled from 'styled-components';
import Filters from "./Filters";




const MultiRangeSlider = ({ min, max, onChange, color }) => {
	const [minVal, setMinVal] = useState(min);
	const [maxVal, setMaxVal] = useState(max);
	const minValRef = useRef(null);
    const maxValRef = useRef(null);	
	const range = useRef(null);


	const Track = styled.div`
      background-color: ${color};
   `;

	const getPercent = useCallback((value) => {
		Math.round(((value - min) / (max - min)) * 100);
 }, [min, max]);

 useEffect(() => {
	if (maxValRef.current) {
	  const minPercent = getPercent(minVal);
	  const maxPercent = getPercent(+maxValRef.current.value); 
  
	  if (range.current) {
		range.current.style.left = `${minPercent}%`;
		range.current.style.width = `${maxPercent - minPercent}%`;
	  }
	}
  }, [minVal, getPercent]);
  useEffect(() => {
	if (minValRef.current) {
	  const minPercent = getPercent(+minValRef.current.value);
	  const maxPercent = getPercent(maxVal);
  
	  if (range.current) {
	   range.current.style.width = `${maxPercent - minPercent}%`;
	  }
	}
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
}, [minVal, maxVal, onChange]);

	return (
		<div>
		  <input
			type="range"
			min={min}
			max={max}
			value={minVal}
			ref={minValRef}
			onChange={(event) => {
			  const value = Math.min(+event.target.value, maxVal - 1);
			  setMinVal(value);
			  event.target.value = value.toString();
			}}
			className={classnames("thumb thumb--zindex-3", {
			  "thumb--zindex-5": minVal > max - 100
			})}
		  />
		  <input
			type="range"
			min={min}
			max={max}
			value={maxVal}
			ref={maxValRef}
			onChange={(event) => {
				const value = Math.max(+event.target.value, minVal + 1);
				setMaxVal(value);
				event.target.value = value.toString();
			}}
			className="thumb thumb--zindex-4"
		  />
		    <div className="slider">
			    <Track className="slider__track "/>
				<div ref={range} className="slider__range" />
				<div className="slider__left-value">$ {minVal}</div>
				<div className="slider__right-value">$ {maxVal}</div>   
			</div>
			<div/>
		</div>
	  );
	};

	MultiRangeSlider.propTypes = {
		min: PropTypes.number.isRequired,
		max: PropTypes.number.isRequired,
		onChange: PropTypes.func.isRequired
	  };
	  


	export default MultiRangeSlider;





























// import React, { useState } from "react";
// import  MultiRangeSlider from "multi-range-slider-react";


// export default function MultiSliderRange(){

//     const [minValue, set_minValue] = useState(10);
//     const [maxValue, set_maxValue] = useState(500);
//     const handleInput = (e) => {
//         set_minValue(e.minValue);
//         set_maxValue(e.maxValue);
//     };

// return (
// 	<section>
// 		<div className="price-page mt-5">
// 			<h2>Price</h2>
// 			<MultiRangeSlider 
// 			    baseClassName="multi-range-slider rngSldr" 
// 				min={10}
// 				max={500}
// 				step={5}
// 				ruler={false}
// 				label={false}
// 				preventWheel={false}
// 				minValue={minValue}
// 				maxValue={maxValue}
// 				onInput={(e) => {
// 					handleInput(e);
// 				}}
// 			/>
// 			<div className="price-value mt-2">
// 			<div>${minValue}</div>
// 			<div> - </div>
// 			<div>${maxValue}</div>
// 			</div>
			
// 		</div>
// 	</section>
// 	);
// }
    








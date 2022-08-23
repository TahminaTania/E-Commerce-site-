// import React from 'react';
// import ReactSlider from "react-slider";
// import { useState } from "react";

import React, { useState } from "react";
import  MultiRangeSlider from "multi-range-slider-react";


export default function MultiSliderRange(){

    const [minValue, set_minValue] = useState(10);
    const [maxValue, set_maxValue] = useState(500);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

return (
	<section>
		<div className="price-page mt-5">
			<h2>Price</h2>
			<MultiRangeSlider 
			    baseClassName="multi-range-slider rngSldr" 
				min={10}
				max={500}
				step={5}
				ruler={false}
				label={false}
				preventWheel={false}
				minValue={minValue}
				maxValue={maxValue}
				onInput={(e) => {
					handleInput(e);
				}}
			/>
			<div className="price-value mt-2">
			<div>${minValue}</div>
			<div> - </div>
			<div>${maxValue}</div>
			</div>
			
		</div>
	</section>
	);
}
    



// export default function MultiSliderRange() {
//     const [min,setMin]=useState(0);
//     const [max,setMax]=useState(500);
//   return (
//     <main>
//         <div className="container">
//         <ReactSlider
//           defaultValue={[min, max]}
//           className="slider"
//           trackClassName="tracker"
//           min={0}
//           max={500}
//           minDistance={50}
//           step={50}
//           withTracks={true}
//           pearling={true}
//           renderThumb={(props) => {
//             return <div {...props} className="thumb"></div>;
//           }}
//           renderTrack={(props) => {
//             return <div {...props} className="track"></div>;
//           }}
//           onChange={([min, max]) => {
//             setMin(min);
//             setMax(max);
//           }}
//         />
//         <div className="values-wrapper">
//             {min} 
//             {max}
//         </div>
//       </div>
        
 
        
//     </main>
//   )
// }






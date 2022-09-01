import React from 'react';
import GoogleMapReact from 'google-map-react';
import { ImLocation2 } from 'react-icons/im';

export default function Map() {
  return (
    <section>
        <div className='maps'>
          <div class="mapouter">
            <div class="gmap_canvas">
                <iframe  id="gmap_canvas" src="https://maps.google.com/maps?q=mirpur%20dohs%20,dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    </iframe>
                    {/* <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/">divi discount</a> */}
                    {/* <br> */}
                    {/* <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style> */}
                    {/* <a href="https://www.embedgooglemap.net">full width google map</a> */}
                    {/* <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style> */}
                    <div className='inside-map'>
                        <div className='d-flex justify-content-center icon'><ImLocation2/></div>
                        <div className='inside-contentent'>
                          <h4>Mirpur Dohs</h4>
                          <p>Phone: +12-345-6789</p>
                          <p>Add: 16 Creek Ave. Farmingdale, NY</p>
                        </div>
                    </div>
            </div>
          </div>
        </div>

    </section>
  )
}




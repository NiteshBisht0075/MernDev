import React from 'react'
const Contact =  () =>{
  return (
    <div>
      <a href="https://en-gb.facebook.com/business" className="fa fa-facebook"></a>
      <a href="https://m.youtube.com/channel/UCSKgOW8Pg_eZymYJyJc432g" className="fa fa-google"></a>
      <a href="https://m.youtube.com/channel/UCSKgOW8Pg_eZymYJyJc432g" className="fa fa-linkedin"></a>
      <a href="https://m.youtube.com/channel/UCSKgOW8Pg_eZymYJyJc432g" className="fa fa-youtube"></a>
      <a href="https://m.youtube.com/channel/UCSKgOW8Pg_eZymYJyJc432g" className="fa fa-instagram"></a> 
      <div id="map-container-google-3" className="z-depth-1-half map-container-3">
      <iframe src="https://maps.google.com/maps?q=warsaw&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0"
        allowFullScreen></iframe>
      </div>
      
      <address className="fa-address">
            <div>ADDRESS:-</div>
            <div>ANDREA GARCIA</div>
            <div>APARTMENT 2</div>
            <div>47 ANYTOWN RUE</div>
           <div>01234 ANYVILLE</div> 
            <div>FRANCE</div>
      </address>
    </div>
  )
}
export default Contact
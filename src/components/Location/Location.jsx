import React from 'react'
import classes from './Location.module.css'
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import artGalleryIcon from '../../assets/art gallery.png'
import { Icon } from 'leaflet'
import locationIcon from "../../assets/location_icon.png"
const Location = () => {
  const position = [41.481312, -71.310410]

  const customIcon = new Icon({
    iconUrl: locationIcon,
    iconSize: [40, 40] 
  })
  return (
   <div className={classes.cta}>
   <MapContainer center={position} zoom={14} scrollWheelZoom={true} style={{width:'100%',height:'90vh'}}>
   <TileLayer
   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}  icon={customIcon}>
      <Popup>
      <div style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
        <b>MODERN ART GALLERY</b><img src={artGalleryIcon} style={{width:'20px',height:'20px'}} alt="art gallary icon" />

      </div>
      </Popup>
    </Marker>
  </MapContainer>
   
    <section className={classes.location} >
      <h2 className='headingFont'> OUR LOCATION</h2>
      <div className={classes.location__details}>
        <h3 className='headingFont'>99 KING STREET</h3>
        <address>
          <ul>
            <li>Newport</li>
            <li>RI 02840</li>
            <li>United States of America</li>
          </ul>
        </address>
        <p>Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.</p>
      </div>
    </section>


   </div>
  )
}

export default Location

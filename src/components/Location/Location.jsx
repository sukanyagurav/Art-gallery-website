import React from 'react'
import classes from './Location.module.css'
const Location = () => {
  return (
   <div className={classes.cta}>
    <div className="location__graph">

    </div>
   
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

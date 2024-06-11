import { Link } from 'react-router-dom'
import rightArrow from '../../assets/icon-arrow-right.svg'
import classes from './Header.module.css'
const Header = () => {
  return (
    <header>
      <div className="banner__content">
        <div className={classes.bg__content}>
          
          <div className={classes.bg_2}></div>
          <div className={classes.bg_1}></div>
        </div>
        <div className={classes.container}>

        <h1 className={`headingFont ${classes.title}`}>MODERN ART GALLERY</h1>
        <div className={classes.right__content}>
          <p>
          The arts in the collection of the <span className="bold">
          Modern Art Gallery
          </span> all started from a spark of inspiration. Will these pieces inspire you? <span className="bold">
           Visit us and find out.
          </span>
          
          </p>
          <Link className={`${classes.location_Btn} headingFont`} to='/location'>
            <span>Our Location</span>
            <span>
              <img src={rightArrow} alt="" />
            </span>
            
          </Link>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Header

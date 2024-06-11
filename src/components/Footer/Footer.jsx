import instagram from '../../assets/icon-instagram.svg'
import facebook from '../../assets/icon-facebook.svg'
import twitter from '../../assets/icon-twitter.svg'
import classes from './Footer.module.css'
import { Link, useActionData, useLocation } from 'react-router-dom'

const Footer = () => {
    const {pathname} = useLocation()
    
  return (
   <footer className={`${pathname == '/location' ? classes.footer_brownBg : '' }`}>
   <div className={classes.footer__content}>
    <Link to='/'>
        <h2 className='headingFont'>MODERN ART GALLERY</h2>
    </Link>
    
    <address>
        <p>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
    </address>
    <nav>
        <ul>
            <li>
                <Link to='#'> <img src={instagram} alt="" /></Link>
            </li>
            <li>
                <Link to='#'> <img src={facebook} alt="" /></Link>
            </li>
            <li>
                <Link to='#'> <img src={twitter} alt="" /></Link>
            </li>
        </ul>
    </nav>
   </div>
   </footer>
  )
}

export default Footer

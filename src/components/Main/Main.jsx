import React from 'react'
import desktopGrid1 from '../../assets/desktop/image-grid-1@2x.jpg';
import tabletGrid1 from '../../assets/tablet/image-grid-1@2x.jpg';
import mobileGrid1 from '../../assets/mobile/image-grid-1@2x.jpg';
import desktopGrid2 from '../../assets/desktop/image-grid-2@2x.jpg';
import tabletGrid2 from '../../assets/tablet/image-grid-2@2x.jpg';
import mobileGrid2 from '../../assets/mobile/image-grid-2@2x.jpg';
import desktopGrid3 from '../../assets/desktop/image-grid-3@2x.jpg';
import tabletGrid3 from '../../assets/tablet/image-grid-3@2x.jpg';
import mobileGrid3 from '../../assets/mobile/image-grid-3@2x.jpg';
import classes from './Main.module.css';
const Main = () => {
  return (
   <main>
    <section className={classes.section_1}>
        <div className={classes.left}>
            <h2 className={`headingFont ${classes.subtitle}`}>YOUR DAY AT THE GALLERY</h2>
            <p>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
        </div>
        <picture className="right">
            {/* <source  srcset={desktopGrid1} media=''/> */}
            <source  srcset={tabletGrid1} media='max-width:900px;'/>
            <source  srcset={mobileGrid1} media='max-width:700px;'/>
            <img src={desktopGrid1} alt="" />

        </picture>
    </section>
    <div className={classes.grid}>
    <picture className={classes.img1}>
            {/* <source  srcset={desktopGrid1} media=''/> */}
            <source  srcset={tabletGrid2} media='min-width:900px;'/>
            <source  srcset={mobileGrid2} media='min-width:700px;'/>
            <img src={desktopGrid2} alt="" />

        </picture>
        <picture className={classes.img2}>
            {/* <source  srcset={desktopGrid1} media=''/> */}
            <source  srcset={tabletGrid3} media='min-width:900px;'/>
            <source  srcset={mobileGrid3} media='min-width:700px;'/>
            <img src={desktopGrid3} alt="" />

        </picture>
        <article className={classes.grid__content}>
            <h2 className={`headingFont ${classes.subtitle}`}>COME & BE INSPIRED</h2>
            <p>We’re excited to welcome you to our gallery and see how our collections influence you.</p>
        </article>
    </div>
   </main>
  )
}

export default Main

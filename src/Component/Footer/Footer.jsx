
import { FaFacebookF, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import style from './Footer.module.css'
import { RiInstagramLine } from 'react-icons/ri'
const Footer = () => {
  return (
    <footer className={style.footerSection}>
     <div className={style.footerContainer}>
      <div className={style.footerItem}>
        <h2>Popular Categories</h2>
        <ul>
          <li>Cars</li>
          <li>Mobile Phones</li>
          <li>LED</li>
          <li>Flat</li>
        </ul>
      </div>
       <div className={style.footerItem}>
        <h2>Trending Searches</h2>
        <ul>
          <li>Bike</li>
          <li>Watches</li>
          <li>Books</li>
          <li>Dogs</li>
        </ul>
      </div>
       <div className={style.footerItem}>
        <h2>OLX</h2>
        <ul>
          <li>Help</li>
          <li>sitemap</li>
          <li>Terms of use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
       <div className={style.footerItem}>
        <h2>About</h2>
        <ul>
          <li>Help</li>
          <li>Contact Us</li>
          <li>Olx Blogs</li>
          <li>OLX for business</li>
        </ul>
      </div>
       <div className={style.footerItem}>
        <h2>Follow Us</h2>
        <div className={style.iconContainer}>
         <FaXTwitter className={style.icon}/>
         <FaFacebookF className={style.icon}/>
         <FaYoutube className={style.icon}/>
         <RiInstagramLine className={style.icon}/>
        </div>
      </div>
     </div>
     <div className={style.footerBottom}>
       All right reserved &copy; 2025
     </div>
    </footer>
  )
}

export default Footer
import React from 'react';
import facebook_logo from '..//img/images/facebook_logo.png';
import inst_logo from '..//img/images/inst_logo.png';
import whatsapp from '..//img/images/whatsapp_logo.png';
import styles from '../componentStyles/Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="adress">
                <p>
                    Rotshild, 1 <br />
                    Tel-Aviv, Israel <br />
                    0587236129
                </p>
            </div> 

            <div className="footer-websites">
                <a href="https://instagram.com/seva_gretchko?utm_medium=copy_link">
                    <img className="icon-contact"
                    id="inst"
                     src={inst_logo} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100059381994346">
                    <img
                        className="icon-contact"
                        id="facebook"
                        src={facebook_logo}
                    ></img>
                </a>
                <a href="https://api.whatsapp.com/send?phone=79122414944">
                    <img
                        className="icon-contact"
                        id="whatsapp"
                        src={whatsapp}
                    ></img>
                </a>
            </div>
        </footer>
    );
}
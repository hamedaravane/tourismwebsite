import React from 'react';
import './footer.css'
import Button from "../Button";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className='footer-container'>
            <section className={'footer-subscription'}>
                <p className={'footer-subscription-heading'}>
                    Subscribe to our newsletter
                </p>
                <p className={'footer-subscription-text'}>
                    You can unsubscribe whenever you want
                </p>
                <div>
                    <form>
                        <input className='footer-input' type={'email'} placeholder={'Enter email'}/>
                        <Button to='/' buttonStyle={'btn--special'} buttonSize={'btn--medium'}>Join</Button>
                    </form>
                </div>
            </section>
            <div className={'footer-links'}>
                <div className={'footer-link-wrapper'}>
                    <div className={'footer-link-items'}>
                        <h2>About us</h2>
                        <Link to={'/'}>Job offers</Link>
                        <Link to={'/'}>Contact us</Link>
                        <Link to={'/'}>About</Link>
                    </div>
                    <div className={'footer-link-items'}>
                        <h2>Help</h2>
                        <Link to={'/'}>Map</Link>
                        <Link to={'/'}>FAQ</Link>
                        <Link to={'/'}>Privacy</Link>
                    </div>
                </div>
                <div className={'footer-link-wrapper'}>
                    <div className={'footer-link-items'}>
                        <h2>Reservation</h2>
                        <Link to={'/'}>Train</Link>
                        <Link to={'/'}>Fly</Link>
                        <Link to={'/'}>Hotel</Link>
                    </div>
                    <div className={'footer-link-items'}>
                        <h2>Socials</h2>
                        <Link to={'/'}>Instagram</Link>
                        <Link to={'/'}>Twitter</Link>
                        <Link to={'/'}>Youtube</Link>
                    </div>
                </div>
            </div>
            <section className={'social-media'}>
                <div className={'social-media-wrap'}>
                    <div className={'footer-logo'}>
                        <Link to={'/'} className={'social-logo'}>
                            Iran Travel<i className="fab fa-typo3"/>
                        </Link>
                    </div>
                    <small className={'website-rights'}>
                        Hamed Arghavan © 2022
                    </small>
                    <div className={'social-icons'}>
                        <Link to={'instagram.com/aboutpurple'} className={'social-icon-link'}>
                            <i className={'fab fa-instagram'}/>
                        </Link>
                        <Link to={'facebook.com/aboutcolorpurple'} className={'social-icon-link'}>
                            <i className={'fab fa-facebook-f'}/>
                        </Link>
                        <Link to={'instagram.com/aboutpurple'} className={'social-icon-link'}>
                            <i className={'fab fa-twitter'}/>
                        </Link>
                        <Link to={'linkedin.com/hamedarvane'} className={'social-icon-link'}>
                            <i className={'fab fa-linkedin'}/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
            <div className="footer__widgets">
                <div className="row">

                <div className="col-lg-4 col-md-6">
                    <div className="widget">
                    <a href="index.html">
                        <img src="img/logo.png" srcSet="img/logo.png 1x, img/logo@2x.png 2x" className="logo__img" alt=""/>
                    </a>
                    <p className="mt-20 mb-30">All you need to know about Cryptocurrencies, Blockchain, ICOs, mining, and more.</p>
                    <div className="socials">
                        <a href="#" className="social social-facebook" aria-label="facebook"><i className="ui-facebook"></i></a>
                        <a href="#" className="social social-twitter" aria-label="twitter"><i className="ui-twitter"></i></a>
                        <a className="social social-linkedin" href="#" target="_blank" aria-label="telegram">
                        <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="-315 -315 1150 1150"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" className=""></path></svg></i>
                        </a>
                        <a href="#" className="social social-youtube" aria-label="youtube"><i className="ui-youtube"></i></a>
                        <a href="#" className="social social-instagram" aria-label="instagram"><i className="ui-instagram"></i></a>
                    </div>
                    </div>
                </div>
    
                <div className="col-lg-5 col-md-6">
                    <div className="widget donate">
                    <h4 className="widget-title">Donate</h4>
                    <ul className="donate__list">
                        <li className="donate__item"><span className="donate__label">BTC:</span> 1CBpxdeQJqeWPKXUMMBkbUcZ1vyezEq57n</li>
                        {/* <!-- <li className="donate__item"><span className="donate__label">LTC:</span> LTdsVS8VDw6syvfQADdhf2PHAm3rMGJvPX</li> --> */}
                        <li className="donate__item"><span className="donate__label">ETH:</span> 0xD8eDde674D2585b40Fd2E9DE8fa5372BE98B7E5c</li>
                    </ul>
                    </div>
                </div>                
    
                <div className="col-lg-3 col-md-6">
                    <div className="widget widget_nav_menu">
                    <h4 className="widget-title">Useful Links</h4>
                    <ul>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Advertise</a></li>
                        <li><a href="shortcodes.html">FAQ</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    </div>
                </div>            
    
                </div>
            </div>    
            </div> 
    
            <div className="footer__bottom">
            <div className="container text-center">
                <span className="copyright">
                &copy; 2018 GuildCrypto | Made by <a href="https://www.guildcrypto.com">GuildCrypto</a>
                </span>          
            </div>
            </div> 
        </footer> 
    )
}

export default Footer
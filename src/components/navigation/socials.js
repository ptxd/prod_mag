import React from 'react'

const Socials = () => {
    return (
            <div className="nav__right-item socials nav__socials"> 
                <a className="social social-facebook social--nobase" href="https://www.facebook.com/guild.crypto.3" target="_blank" aria-label="facebook">
                  <i className="ui-facebook"></i>
                </a>
                <a className="social social-twitter social--nobase" href="https://twitter.com/guildcrypto" target="_blank" aria-label="twitter">
                  <i className="ui-twitter"></i>
                </a>
                <a className="social social--nobase" href="#" target="_blank" aria-label="telegram" style={{paddingTop:'6px'}}>
                  <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" className=""></path></svg></i>
                </a>
                <a className="social social-youtube social--nobase" href="#" target="_blank" aria-label="youtube">
                  <i className="ui-youtube"></i>
                </a>
            </div>
    )
}

export default Socials
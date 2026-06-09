import config from '../config.json';
import { Logo } from './Symbols';
import { Link } from 'react-router-dom';
import { IconDiscord, IconTwitter, IconGitHub, IconYouTube, IconLinkedIn } from "./Symbols";

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer>
        <div className='footer-branding'>
          <Link aria-label='Home' to='/'>
            <Logo />
          </Link>
          <div>
            <span><b>TeluguSMP</b></span>
            <br />
            <span className='copyright'>© 2025 - {new Date().getFullYear()} All rights reserved</span>
          </div>
        </div>
        <div className='footer-socials'>
        <a title='Discord' href={config.discordInviteURL} target="_blank" rel='noreferrer'>
            <IconDiscord alt='Discord' className='social-icon' />
          </a>
          <a title='YouTube' href="https://www.youtube.com/@telugusmp" target="_blank" rel='noreferrer'>
            <IconYouTube alt='YouTube' className='social-icon' />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
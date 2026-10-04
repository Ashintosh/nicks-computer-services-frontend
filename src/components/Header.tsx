import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled((previous) => {
        if (!previous && scrollY > 80) {
          return true;
        }

        if (previous && scrollY < 30) {
          return false;
        }

        return previous;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`site-header${isScrolled ? ' scrolled' : ''}`}>
      <div className="header-top">
        <div className="header-tagline">
          <span>Simple Solutions. Reliable Service.</span>
        </div>

        <a href="tel:+15022428740" className="phone-link">
          <FontAwesomeIcon icon={faPhone} />
          <span>+1 (502) 242-8740</span>
        </a>

        <a href="mailto:nick@nickscomputer.services" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>nick@nickscomputer.services</span>
        </a>
      </div>

      <nav>
        <a href="/" className="logo">
          <img src={logo} alt="Logo" />
          <span>Nick's Computer Services</span>
        </a>

        <div className="nav-links">
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          {/* <a href="#" className="nav-link">Blog</a> */}

          <a href="#contact" className="book-service-btn">
            Book a Service
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;

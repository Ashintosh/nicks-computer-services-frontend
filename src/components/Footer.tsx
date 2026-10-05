const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <h3>Nick's Computer Services</h3>
          <p>
            Local computer help, made simple. Reliable support to keep your technology running
            smoothly.
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com/YOUR_USERNAME/YOUR_REPOSITORY"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 2.09 3.57 1.6.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.53.23 2.67.12 2.95.72.78 1.14 1.77 1.14 2.99 0 4.3-2.61 5.25-5.1 5.52.4.35.75 1.03.75 2.08V22c0 .29.2.63.77.53A11.1 11.1 0 0 0 12 .9Z"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.7H4.98V9.19h2.95v9.51ZM6.45 7.89a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.26 10.81h-2.94v-4.63c0-1.1-.02-2.51-1.53-2.51-1.54 0-1.78 1.2-1.78 2.43v4.71H9.52V9.19h2.82v1.3h.04c.39-.74 1.35-1.52 2.78-1.52 2.98 0 3.55 1.96 3.55 4.51v5.22Z"
                />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/YOUR_PAGE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M13.5 21v-8.2h2.76l.41-3.2H13.5V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14A22.4 22.4 0 0 0 14.3 3c-2.48 0-4.18 1.52-4.18 4.31V9.6H7.3v3.2h2.82V21h3.38Z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-column">
          <h4>Explore</h4>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Additional Links */}
        <div className="footer-column">
          <h4>More</h4>
          <a
            href="https://github.com/Ashintosh/nicks-computer-services-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code <span aria-hidden="true">↗</span>
          </a>
          <a href="/attributions">Attributions</a>
          <a href="#contact">Get Support</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Nick's Computer Services. All rights reserved.</p>
        <p>
          Built with <span className="footer-heart">♥</span> by Nick.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

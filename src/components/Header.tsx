import logo from '../assets/logo.png';

function Header() {
  return (
    <header>
      <div>
        <p>+1 (502) 242-8740</p>
      </div>

      <nav>
        <a href="/" className="logo">
          <img src={logo} alt="Logo" />
          <span>Nick's Computer Services</span>
        </a>

        <div>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;

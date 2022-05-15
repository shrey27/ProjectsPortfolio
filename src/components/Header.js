export function Header() {
  return (
    <div>
      <nav className='navbar center'>
        <a href='#section-1' className='navbar-link'>
          Home
        </a>
        <a href='#section-2' className='navbar-link'>
          About
        </a>
        <a href='#section-3' className='navbar-link'>
          Portfolio
        </a>
        <a href='#section-4' className='navbar-link'>
          Contact
        </a>
      </nav>
      <section className='section-1 center' id='section-1'>
        <h1 className='section-1-heading'>UI/UX Developer</h1>
        <img
          src='images/john-smith.jpg'
          alt='Shrey Pandey'
          className='person-img'
        />
        <h3 className='person-name'>Shrey Pandey</h3>
        <a href='#section-3' className='section-1-btn'>
          Resume
        </a>
      </section>
    </div>
  );
}

export function Header() {
  return (
    <div>
      <nav class='navbar center'>
        <a href='#section-1' class='navbar-link'>
          Home
        </a>
        <a href='#section-2' class='navbar-link'>
          About
        </a>
        <a href='#section-3' class='navbar-link'>
          Portfolio
        </a>
        <a href='#section-4' class='navbar-link'>
          Contact
        </a>
      </nav>
      <section class='section-1 center' id='section-1'>
        <h1 class='section-1-heading'>UI/UX Developer</h1>
        <img
          src='images/john-smith.jpg'
          alt='Shrey Pandey'
          class='person-img'
        />
        <h3 class='person-name'>Shrey Pandey</h3>
        <a href='#section-3' class='section-1-btn'>
          Resume
        </a>
      </section>
    </div>
  );
}

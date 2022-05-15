export default function Navbar() {
  return (
    <div class='container'>
      <section class='section-1 center' id='section-1'>
        <h1 class='section-1-heading'>Web Developer</h1>
        <img src='images/john-smith.jpg' alt='John Smith' class='person-img' />
        <h3 class='person-name'>John Smith</h3>
        <a href='#section-3' class='section-1-btn'>
          Projects
        </a>
      </section>

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

      <section class='section-2' id='section-2'>
        <h1 class='section-heading section-2-heading'>About Me</h1>
        <div class='progress-bars-wrapper'>
          <div class='progress-bar'>
            <p class='progress-text'>
              HTML
              <span></span>%
            </p>
            <div class='progress-percent'></div>
          </div>
          <div class='progress-bar'>
            <p class='progress-text'>
              CSS
              <span></span>%
            </p>
            <div class='progress-percent'></div>
          </div>
          <div class='progress-bar'>
            <p class='progress-text'>
              JavaScript
              <span></span>%
            </p>
            <div class='progress-percent'></div>
          </div>
          <div class='progress-bar'>
            <p class='progress-text'>
              SASS
              <span></span>%
            </p>
            <div class='progress-percent'></div>
          </div>
          <div class='progress-bar'>
            <p class='progress-text'>
              ReactJS
              <span></span>%
            </p>
            <div class='progress-percent'></div>
          </div>
          <div class='progress-bar'>
            <p class='progress-text'>
              NodeJS
              <span></span>%
            </p>
            <div class='progress-percent'></div>
          </div>
          <div class='progress-bar'>
            <p class='progress-text'>
              MongoDB
              <span></span>%
            </p>
            <div class='progress-percent'></div>
          </div>
        </div>
        <div class='services'>
          <div class='service'>
            <i class='far fa-lightbulb'></i>
            <h2 class='service-heading'>Creative</h2>
          </div>
          <div class='service'>
            <i class='fas fa-cut'></i>
            <h2 class='service-heading'>Problem Solving</h2>
          </div>
          <div class='service'>
            <i class='fas fa-tachometer-alt'></i>
            <h2 class='service-heading'>Fast</h2>
          </div>
          <div class='service'>
            <i class='fas fa-rocket'></i>
            <h2 class='service-heading'>Dynamic</h2>
          </div>
        </div>
      </section>

      <section class='section-3' id='section-3'>
        <h1 class='section-heading section-3-heading'>My Projects</h1>
        <div class='projects-wrapper center'>
          <div class='project'>
            <div class='project-text'>
              <h2 class='project-name'>architect website</h2>
              <h4 class='project-technologies'>HTML / CSS / JS</h4>
            </div>
            <img src='images/project-1.jpg' class='project-img' alt='project' />
            <a
              href='https://www.youtube.com/watch?v=3J-EFMzz94g'
              class='project-link'
              target='_blank'
              rel='noreferrer'
            >
              Go to Video
            </a>
          </div>
          <div class='project'>
            <div class='project-text'>
              <h2 class='project-name'>Budget App</h2>
              <h4 class='project-technologies'>ReactJS</h4>
            </div>
            <img src='images/project-2.jpg' class='project-img' alt='project' />
            <a
              href='https://www.youtube.com/watch?v=fDffQYs2WB0'
              class='project-link'
              target='_blank'
              rel='noreferrer'
            >
              Go to Video
            </a>
          </div>
          <div class='project'>
            <div class='project-text'>
              <h2 class='project-name'>wine house</h2>
              <h4 class='project-technologies'>HTML / CSS / JS</h4>
            </div>
            <img src='images/project-3.jpg' class='project-img' alt='project' />
            <a
              href='https://www.youtube.com/watch?v=jtmuopTpzGE'
              class='project-link'
              target='_blank'
              rel='noreferrer'
            >
              Go to Video
            </a>
          </div>
          <div class='project'>
            <div class='project-text'>
              <h2 class='project-name'>task manager</h2>
              <h4 class='project-technologies'>ReactJS</h4>
            </div>
            <img src='images/project-4.jpg' class='project-img' alt='project' />
            <a
              href='https://www.youtube.com/watch?v=fqup-BL3VjI'
              class='project-link'
              target='_blank'
              rel='noreferrer'
            >
              Go to Video
            </a>
          </div>
          <div class='project'>
            <div class='project-text'>
              <h2 class='project-name'>The Road</h2>
              <h4 class='project-technologies'>HTML / CSS / JS</h4>
            </div>
            <img src='images/project-5.jpg' class='project-img' alt='project' />
            <a
              href='https://www.youtube.com/watch?v=qmyN7lYY_xo'
              class='project-link'
              target='_blank'
              rel='noreferrer'
            >
              Go to Video
            </a>
          </div>
          <div class='project'>
            <div class='project-text'>
              <h2 class='project-name'>food recipe app</h2>
              <h4 class='project-technologies'>ReactJS</h4>
            </div>
            <img src='images/project-6.jpg' class='project-img' alt='project' />
            <a
              href='https://www.youtube.com/watch?v=d1vT4kkTCaw'
              class='project-link'
              target='_blank'
              rel='noreferrer'
            >
              Go to Video
            </a>
          </div>
          <div class='project'>
            <div class='project-text'>
              <h2 class='project-name'>slideshow</h2>
              <h4 class='project-technologies'>HTML / CSS / JS</h4>
            </div>
            <img src='images/project-7.jpg' class='project-img' alt='project' />
            <a
              href='https://www.youtube.com/watch?v=1qhSSp2q7n4'
              class='project-link'
              target='_blank'
              rel='noreferrer'
            >
              Go to Video
            </a>
          </div>
          <div class='project'>
            <div class='project-text'>
              <h2 class='project-name'>Hamburger menu</h2>
              <h4 class='project-technologies'>HTML / CSS / JS</h4>
            </div>
            <img src='images/project-8.jpg' class='project-img' alt='project' />
            <a
              href='https://www.youtube.com/watch?v=9Q7wy8r3i8w'
              class='project-link'
              target='_blank'
              rel='noreferrer'
            >
              Go to Video
            </a>
          </div>
          <div class='project'>
            <div class='project-text'>
              <h2 class='project-name'>CSS grid menu</h2>
              <h4 class='project-technologies'>HTML / CSS / JS</h4>
            </div>
            <img src='images/project-9.jpg' class='project-img' alt='project' />
            <a href='/' class='project-link' target='_blank' rel='noreferrer'>
              Go to Video
            </a>
          </div>
        </div>
      </section>

      <section class='section-4' id='section-4'>
        <h1 class='section-heading section-4-heading'>Contact Me</h1>
        <form class='contact-form center'>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <input type='submit' value='Submit' class='contact-form-btn' />
        </form>
      </section>

      <footer class='section-5 center'>
        <div class='social-media'>
          <a href='#none' class='social-media-link'>
            <i class='fab fa-github-square'></i>
          </a>
          <a href='#none' class='social-media-link'>
            <i class='fab fa-youtube'></i>
          </a>
          <a href='#none' class='social-media-link'>
            <i class='fab fa-facebook-square'></i>
          </a>
          <a href='#none' class='social-media-link'>
            <i class='fab fa-instagram-square'></i>
          </a>
        </div>
        <p class='copyright'>
          Copyright &copy; CodeAndCreate. All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

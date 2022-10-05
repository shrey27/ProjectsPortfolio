import React from 'react';
import {assets} from '../constant';

export function Header() {
  return (
    <div>
      <nav className="navbar center">
        <a href="#section-1" className="navbar-link">
          Home
        </a>
        <a href="#section-2" className="navbar-link">
          Experience
        </a>
        <a href="#section-3" className="navbar-link">
          Projects
        </a>
        <a href="#section-4" className="navbar-link">
          Blogs
        </a>
      </nav>
      <section className="section-1 center" id="section-1">
        <h1 className="section-1-heading">UI/UX Developer</h1>
        <img
          src={assets.profilepic}
          alt="Shrey Pandey"
          className="person-img"
        />
        <h3 className="person-name">Shrey Pandey</h3>
        <a
          href={assets.resume}
          className="section-1-btn"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </section>
    </div>
  );
}

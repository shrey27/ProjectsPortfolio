import React from 'react';
import { blogs } from '../constant';

export function Blogs() {
  return (
    <section class='section-4' id='section-4'>
      <h1 class='section-heading section-4-heading'>Blogs</h1>
      <div class='projects-wrapper center'>
        {blogs.map((blog) => {
          return (
            <div class='blog' key={blog.id}>
              <div class='blog-text'>
                <h2 class='blog-name'>{blog.name}</h2>
              </div>
              <img src={blog.banner} class='blog-img' alt='blog' />
              <a
                href={blog.demo}
                class='blog-link'
                target='_blank'
                rel='noreferrer'
              >
                Read Blog
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

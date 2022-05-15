import { skills, workex } from '../constant';

export function Skills() {
  return (
    <section className='section-2' id='section-2'>
      <h1 className='section-heading section-2-heading'>SKILLS & EXPERIENCE</h1>
      <div className='skills'>
        {skills.map((skill, index) => {
          return (
            <img
              src={skill}
              alt='skills'
              className='skills--img'
              key={skill[0] + index}
            />
          );
        })}
      </div>
      <div className='experience'>
        {workex.map((work) => {
          return (
            <div className='work' key={work.id}>
              <h1>{work.designation}</h1>
              <h2 className='details'>
                <span>{work.company}</span>
                <span className='right'>{work.duration}</span>
              </h2>
              <p>{work.role}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

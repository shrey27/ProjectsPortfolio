import { skills } from "../constant";
import { Experience } from "./Experience";

export function Skills() {
  return (
    <section className="section-2" id="section-2">
      <h1 className="section-heading section-2-heading">SKILLS & EXPERIENCE</h1>
      <div className="skills">
        {skills.map((skill, index) => {
          return (
            <img
              src={skill}
              alt="skills"
              className="skills--img"
              key={skill[0] + index}
            />
          );
        })}
      </div>
      <Experience />
    </section>
  );
}

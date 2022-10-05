import React from 'react';
import { workex } from "../constant";

export function Experience() {
  return (
    <div className="experience">
      {workex.map((work) => {
        return (
          <div className="work" key={work.id}>
            <h2 className="company">{work.company}</h2>
            <h2 className="designation">{work.designation}</h2>
            <h2 className="duration">{work.duration}</h2>
            <hr />
            <ul className="role">
              {work.role.map((item) => {
                return <li className="role--item">{item}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

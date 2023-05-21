import React from 'react';
import s from './Project.module.css'

const Project = (props: any) => {
    return (
      <div className={s.project}>
        <div className={s.icon}></div>
        <div className={s.descriptionContainer}>
          <h3 className={s.projectTitle}>{props.title}</h3>
          <div className={s.description}>{props.description}</div>
        </div>
      </div>
    );
};

export default Project;
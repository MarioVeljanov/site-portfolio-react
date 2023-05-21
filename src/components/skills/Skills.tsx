import React from 'react';
import s from './Skills.module.css'
import styleContainer from "../common/styles/container/Container.module.css";
import Skill from './skil/Skill';


const Skills = () => {
    return (
      <div className={s.skillsBlock}>
        <div className={styleContainer.container}>
          <h2 className={s.skillsSubtitle}>Skills</h2>
          <div className={s.skills}>
            <Skill title={"Js"}  />
            <Skill title={"Ts"}/>
            <Skill title={"React"}  />
            <Skill title={"React"} />
            <Skill title={"React"}  />
            <Skill title={"React"}  />
            <Skill title={"React"} />
          </div>
        </div>
      </div>
    );
};

export default Skills;
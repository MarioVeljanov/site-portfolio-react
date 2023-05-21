import React from 'react';
import s from "./Projects.module.css";
import styleContainer from "../common/styles/container/Container.module.css";
import Project from './project/Project';





const Projects = (props: any) => {
    return (
      <div className={s.projectsBlocks}>
        <div className={styleContainer.container}>
          <h2 className={s.projectTitle}>Project</h2>
          <div className={s.projects}>
            <Project title={"Js"} description={"djdjdjdjdjdjdjjdjdjdjdjd"} />
            <Project title={"Js"} description={"djdjdjdjdjdjdjjdjdjdjdjd"} />
            <Project title={"Js"} description={"djdjdjdjdjdjdjjdjdjdjdjd wefe er qerweewrsdf ewfrwerfwe werwerwer ewrwerwe werwe werw wer we ewrwerewr ewrwrwerwe eqrq "} />
          </div>
        </div>
      </div>
    );
};

export default Projects;
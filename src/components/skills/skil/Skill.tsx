import React from 'react';
import s from "./Skill.module.css";


const Skill = (props: any) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3 className={s.skillTitle}>{props.title}</h3>
        </div>
    );
};

export default Skill;
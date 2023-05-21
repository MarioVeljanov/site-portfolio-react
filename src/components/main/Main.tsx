import React from 'react';
import s from './Main.module.css'
import styleContainer from '../common/styles/container/Container.module.css'

const Main = () => {
    return (
      <div className={s.mainBlock}>
        <div className={styleContainer.container}>
          <div className={s.mainContainer}>
            <div className={s.greetings}>
              <span>Hi there</span>
              <h1>I am...</h1>
              <p>Forntend Developer</p>
            </div>
            <div className={s.photo}></div>
          </div>
        </div>
      </div>
    );
};

export default Main;
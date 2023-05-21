import React from "react";
import s from "./Contacts.module.css";
import styleContainer from "../common/styles/container/Container.module.css";

const Contacts = () => {
  return (
    <div className={s.skillsBlock}>
      <div className={styleContainer.container}>
        <h2 className={s.subtitleContacts}>Contacts</h2>
        <form className={s.container}>
          <input placeholder="Name"/>
          <input placeholder="Email"/>
          <textarea placeholder="Message"/>

        </form>
      </div>
    </div>
  );
};

export default Contacts;

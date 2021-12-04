import React from 'react';
import { LOCALES } from '../i18n/locales';

export const I18nSelect = ({setLanguage}) => {

  const changeLenguaje = (event) => {
    event.preventDefault();
    let idioma = event.target.value;
    console.log(idioma);
    setLanguage(idioma);
  };


  return (<div className="collapse navbar-collapse" id="navbarNavDropdown">
  <ul className="navbar-nav">
    <li className="nav-item dropdown">
      <select className="form-select" onChange={changeLenguaje}>
        <option value={LOCALES.SPANISH}>Español</option>
        <option value={LOCALES.ENGLISH}>English</option>
      </select>
    </li>
  </ul>
</div>)
};

import React from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../api/apiCalls";

const LanguageSelector = (props) => {
  const { i18n } = useTranslation();
  const onChangeLanguage = (language) => {
    i18n.changeLanguage(language);
    changeLanguage(language);
  };

  return (
    <div className="container">
      <span
        className="fi fi-tr fs-3"
        onClick={() => onChangeLanguage("tr")}
        style={{ cursor: "pointer" }}
      ></span>
      <span
        className="fi fi-us fs-3 mx-3"
        onClick={() => onChangeLanguage("en")}
        style={{ cursor: "pointer" }}
      ></span>
    </div>
  );
};

export default LanguageSelector;

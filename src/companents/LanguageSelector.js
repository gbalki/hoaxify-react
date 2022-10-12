import React from 'react';
import { withTranslation } from 'react-i18next';
import { changeLanguage } from '../api/apiCalls';

const LanguageSelector = (props) => {
   const onChangeLanguage = language => {
        const { i18n } = props;
        i18n.changeLanguage(language);
        changeLanguage(language);
    };

    return (
        <div className='container'>
            
                    <span className="fi fi-tr fs-3" onClick={() => onChangeLanguage('tr')} style={{cursor: 'pointer'}}></span>
                    <span className="fi fi-us fs-3 mx-3" onClick={() => onChangeLanguage('en')} style={{cursor: 'pointer'}}></span>
                    
            
        </div>
    );
};

export default withTranslation()(LanguageSelector); 
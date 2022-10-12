import React from 'react';

const ButtonWithProgress = (props) => {
    const {onClick, pandingApiCall,disabled,text} = props;
    return (
        <button className="btn btn-primary" onClick={onClick} disabled={disabled}>
        {pandingApiCall && <span className="spinner-border spinner-border-sm"></span>}
        {text}</button>
    );
};

export default ButtonWithProgress;
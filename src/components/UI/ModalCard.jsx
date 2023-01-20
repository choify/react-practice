import React from 'react';

import classes from './Wrapper.module.css';

const ModalCard = (props) => {
    return <div className={`${classes.wrapper} ${props.className}`}>{props.children}</div>;
};

export default ModalCard;
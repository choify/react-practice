import React from 'react';
import Wrapper from './Wrapper';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return (
        <Wrapper className={classes.modal}>
            <header className={classes.header}>
                <h4>{props.title}</h4>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button>Okay</Button>
            </footer>
        </Wrapper>
    );
};

export default ErrorModal;
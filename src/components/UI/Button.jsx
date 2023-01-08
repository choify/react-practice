import React from 'react';

import MaterialButton from '@mui/material/Button';

const Button = (props) => {
    return (
        <MaterialButton
            type={props.type || 'button'}
            onClick={props.onClick}
            variant={props.variant || 'outlined'}
        >
            <b>{props.children}</b>
        </MaterialButton>
    );
};

export default Button;
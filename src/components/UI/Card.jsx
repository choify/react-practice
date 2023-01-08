import React from 'react';

import MaterialCard from '@mui/material/Card';


const Card = (props) => {
    return (
        <MaterialCard sx={{display:'flex'}}>
            {props.children}
        </MaterialCard>
    )
}

export default Card;
import React from 'react';

import Card from "../UI/Card";
import Typography from "@mui/material/Typography";

const CommentItem = (props) => {
    return (
        <Card>
            <Typography component="div" variant="h5">
                {props.comment}
            </Typography>
        </Card>
    );
};

export default CommentItem;
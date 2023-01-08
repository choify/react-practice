import * as React from 'react';
import Box from '../UI/Box';
import CommentItem from './CommentItem';

const CommentList = (props) => {
    return (
        <Box>
            <ul>
                {props.comments.map(user => (
                    <li key={user.id}>
                        <CommentItem comment={user.comment}/>
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default CommentList;
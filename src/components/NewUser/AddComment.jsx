import React, {useState} from 'react';
import Box from '../UI/Box';
import Button from '../UI/Button';
import Input from '@mui/joy/Input';
import ErrorModal from "../UI/ErrorModal";

const AddComment = (props) => {
    const [enteredComment, setEnteredComment] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredComment.trim().length === 0) return;
        props.onAddComment(enteredComment);
        setEnteredComment('');
    };

    const commentChangeHandler = (event) => {
        setEnteredComment(event.target.value);
    };

    return (
        <>
            <ErrorModal title={"로그인"} message={"로그인이 필요합니다."}/>
            <Box>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="comment">Username</label>
                    <Input
                        id="comment"
                        type="text"
                        value={enteredComment}
                        onChange={commentChangeHandler}
                        placeholder="댓글 추가..."
                        required
                        sx={{mb: 1, fontSize: 'var(--joy-fontSize-sm)'}}
                    />
                    <Button type="submit">댓글</Button>
                </form>
            </Box>
        </>
    );
}

export default AddComment;
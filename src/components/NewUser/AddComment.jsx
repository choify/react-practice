import React, {useState, useRef} from 'react';
import Box from '../UI/Box';
import Button from '../UI/Button';
import Input from '@mui/joy/Input';
import ErrorModal from "../UI/ErrorModal";

const AddComment = (props) => {
    const commentInputRef = useRef();
    const [error, setError] = useState(null);

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredComment = commentInputRef.current.parentElement[0].value;
        console.log(commentInputRef.current.parentElement[0].value);
        if (enteredComment.trim().length === 1) {
            setError({
                title: "댓글 오류",
                message: "두글자 이상 입력해 주세요."
            });
            return;
        }

        if (enteredComment.trim().length === 0) return;
        props.onAddComment(enteredComment);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <React.Fragment>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Box>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="comment">Username</label>
                    <Input
                        id="comment"
                        type="text"
                        ref={commentInputRef}
                        placeholder="댓글 추가..."
                        required
                        sx={{mb: 1, fontSize: 'var(--joy-fontSize-sm)'}}
                    />
                    <Button type="submit">댓글</Button>
                </form>
            </Box>
        </React.Fragment>
    );
}

export default AddComment;
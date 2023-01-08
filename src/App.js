import React, {useState} from 'react'
import AddComment from "./components/NewUser/AddComment";
import CommentList from "./components/UserList/CommentList";


function App() {
    const [commentsList, setCommentsList] = useState([])
    const addUserHandler = (uCommnet) => {
        setCommentsList((prevCommentsList) => {
          return [
              ...prevCommentsList,
              { comment:uCommnet, id: Math.random().toString() }
          ];
      });
    };
    return (
        <div>
            <header>
                <h1>테스트</h1>
            </header>
            <AddComment onAddComment={addUserHandler} />
            <CommentList comments={commentsList}/>
        </div>
    );
}

export default App;

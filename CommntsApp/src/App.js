import './App.css';
import React, { useState } from 'react'
import CommentsList from './components/CommentsList';
import CommentsInput from './components/CommentsInput';

function App() {
  const [comments, setComments] = useState([])

  const sendMessage = (inputText) => {
    if(inputText === ""){
      alert("Empty Comments are not Allowed...");
    }else{
      console.log("In else Part");
      setComments([...comments, inputText]);
    }
    console.log(inputText + " Text From Button Action");
  }
  return (
    <>
      <div className="container mt-5 p-3 mb-5">
        <CommentsList />
        <CommentsInput sendMessage={sendMessage} />
      </div>

    </>
  );
}

export default App;

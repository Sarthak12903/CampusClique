import React from 'react'
import { useState } from 'react';
const CommentForm = ({addNewComment}) => {
   const [commentData, setCommentData] = useState({
    username: "CurrentUser",
    comment: "hiiii"
   }); 

 const handleInputChange = (e) => {
     setCommentData((currData) => ({      
        ...currData,
        [e.target.name]: e.target.value
     }));

  };  
  const handleCommentSubmit = (e) => {
     
    e.preventDefault();
    addNewComment(commentData);  
       console.log(commentData);
   setCommentData({
    username: "CurrentUser",
    comment: ""
   });

  } 
  return (
    <div>
        <form action=" "
        onSubmit={handleCommentSubmit}
        className='flex items-center p-4 bg-gray-900 rounded-lg w-auto mx-auto mt-10'>
     
        <input type="text"
         name='comment'
         placeholder='Add a comment...' 
         value={commentData.comment} 
         onChange={handleInputChange}
        className='bg-gray-800 text-white p-2 rounded-lg w-full' maxLength="70"/>
        <button type="submit" className='bg-blue-500 text-white p-2 rounded-xl ml-2 '>Post</button>
        </form>
    </div>
  )
}

export default CommentForm
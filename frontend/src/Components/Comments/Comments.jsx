import React from 'react'
import CommentForm from '../CommentForm/CommentForm'
import { useState } from 'react';
const Comments = () => { 
    const [comments, setComments] = useState([{
        username: "Alina Pathan",
        comment: "This is a sample comment to see the comment section styling."
    }])


    let addNewComment = (comment) => {
        setComments([...comments, comment]);
        console.log("new comment added");
        
    }

  return (
    <div className='w-auto h-auto p-3 text-md bg-[#1e1e1e] rounded-lg mx-auto mt-10 border-2 border-[#34D399]'>
     {comments.map((comment, index) => (
        <div key={index} className='mb-4 border-b border-gray-700 pb-2'>
            <p className='text-sm my-1 '>@{comment.username}</p>
            <p className='text-white text-sm mb-1'>{comment.comment}</p>
        </div>
     ))}
        <CommentForm addNewComment={addNewComment}/>
    </div>
  )
}

export default Comments
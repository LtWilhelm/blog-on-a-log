import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateDisplay } from '../Date';
import { CommentComposer } from './Composer';
import { Replies } from './Replies';

export const CommentDisplay = ({ comment, updateBlog }) => {
  const [showReplyEditor, setShowReplyEditor] = useState(false);
  return (
    <div>
      <h6>{comment.user.username}</h6>
      <DateDisplay date={comment.date} />
      <pre>{comment.body}</pre>
      <button className="btn btn-primary btn-sm" onClick={() => setShowReplyEditor(true)}>Reply</button>
      {showReplyEditor && <CommentComposer commentId={comment._id} updateBlog={updateBlog} hide={() => setShowReplyEditor(false)} />}
      <Replies replies={comment.comments} updateBlog={updateBlog} />
    </div>
  )
}
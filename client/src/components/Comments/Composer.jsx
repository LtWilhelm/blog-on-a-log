import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom';
import api from '../../utils/api';

export const CommentComposer = ({ updateBlog, commentId, hide }) => {
  const [comment, setComment] = useState('');
  const { params: { id } } = useRouteMatch();

  const submitComment = async (e) => {
    e.preventDefault()
    try {
      let user = JSON.parse(localStorage.getItem('user'))

      await api.AddComment(commentId || id, {
        body: comment,
        user: user.id
      });
      hide && hide();
      updateBlog();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <hr />
      <form>
        <textarea autoFocus={!!hide} onBlur={() => hide && !comment && hide()} placeholder="Write your comment..." value={comment} onChange={({ target }) => setComment(target.value)} style={{
          height: '3em',
          width: '100%'
        }}></textarea>
        <button onClick={submitComment} className="btn btn-primary btn-sm">Comment</button>
      </form>
    </>
  )
}
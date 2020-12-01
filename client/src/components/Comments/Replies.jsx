import React from 'react'
import { CommentDisplay } from './Comment'

export const Replies = ({replies, updateBlog}) => {

  return replies ? (
    <div style={{
      paddingLeft: 20,
      borderLeft: 'solid 1px black'
    }}>
      {replies.map(reply => (
        <CommentDisplay comment={reply} updateBlog={updateBlog} />
      ))}
    </div>
  ) : <></>
}
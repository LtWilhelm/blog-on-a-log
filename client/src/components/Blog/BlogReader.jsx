import React, {useState} from 'react';
import {format} from 'date-fns';

export const BlogReader = () => {
  const [blog, setBlog] = useState();

  return (
    <div>
      {blog && 
      <>
        <h2>{blog.title}</h2>
      <span>{format(new Date(blog.date), "MMMM d, yyyy")}</span>
        <pre>
          {blog.body}
        </pre>
        <div>
          {/* Comments go here! */}
        </div>
      </>
      }
    </div>
  )
}
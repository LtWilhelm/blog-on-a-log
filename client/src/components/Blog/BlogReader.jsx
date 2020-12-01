import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import api from '../../utils/api';
import { useRouteMatch } from 'react-router-dom';
import { CommentComposer } from '../Comments/Composer';
import { CommentDisplay } from '../Comments/Comment';
import { DateDisplay } from '../Date';

export const BlogReader = () => {
  const [blog, setBlog] = useState();
  const { params: { id } } = useRouteMatch()
  useEffect(() => {
    getBlog();
  }, [])

  const getBlog = async () => {
    const { data } = await api.GetBlogPost(id);
    setBlog(data);
  }

  return (
    <div>
      {blog &&
        <>
          <h2>{blog.title}</h2>
          <DateDisplay date={blog.date} />
          <pre>
            {blog.body}
          </pre>
          <div>
            <CommentComposer updateBlog={getBlog} />
            {blog.comments.map(comment => (
              <CommentDisplay comment={comment} updateBlog={getBlog} />
            ))}
          </div>
        </>
      }
    </div>
  )
}
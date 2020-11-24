import React, {useEffect, useState} from 'react';
import {format} from 'date-fns';
import api from '../../utils/api';
import {useRouteMatch} from 'react-router-dom';

export const BlogReader = () => {
  const [blog, setBlog] = useState();
  const {params: {id}} = useRouteMatch()
  useEffect(() => {
    getBlog();
  }, [])

  const getBlog = async () => {
    const {data} = await api.GetBlog(id);
    setBlog(data);
  }

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
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BlogCard } from '../../components/Blog/BlogCard';
import api from '../../utils/api';

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    getBlogs();
  }, [])

  const getBlogs = async () => {
    const {data} = await api.GetAllPosts(pageNumber);
    setPosts(data);
  }

  return (
    <div className="row">
      {posts.map(post => (
        <div className="col-4 col-xs-1">
          <Link to={`/posts/${post._id}`} style={{color: 'inherit'}}><BlogCard blog={post} /></Link>
        </div>
      ))}
    </div>
  )
}
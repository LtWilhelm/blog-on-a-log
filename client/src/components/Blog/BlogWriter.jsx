import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import {Redirect} from 'react-router-dom';

export const BlogWriter = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [redirect, setRedirect] = useState('');

  // useEffect(() => console.log(title), [title]);

  const saveBlog = async () => {
    let user = JSON.parse(localStorage.getItem('user'))
    const { data } = await api.CreateBlogPost(user.id, {
      title,
      body
    })
    setRedirect('/posts/' + data)
  }

  return redirect ? <Redirect to={redirect} /> : (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
      <textarea name="" id="" cols="30" rows="10" value={body} onChange={(e) => setBody(e.target.value)} ></textarea><br/>
      <button onClick={saveBlog}>Save</button>
    </div>
  )
}
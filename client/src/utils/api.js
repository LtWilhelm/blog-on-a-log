import axios from 'axios'

const api = {
  SignIn: (signIn) => axios.post('http://localhost:3001/users/signin', signIn),
  Register: (register) => axios.post('http://localhost:3001/users/register', register),
  GetBlog: (id) => axios.get("http://localhost:3001/posts/" + id),
  CreateBlog: (userId, blog) => axios.post('http://localhost:3001/posts/' + userId, blog)
}

export default api;
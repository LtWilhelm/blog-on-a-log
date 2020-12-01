import axios from 'axios'

const api = {
  SignIn: (signIn) => axios.post('/users/signin', signIn),
  Register: (register) => axios.post('/users/register', register),
  GetBlogPost: (id) => axios.get("/posts/" + id),
  GetAllPosts: (pageNumber) => axios.get('/posts?p=' + pageNumber),
  CreateBlogPost: (userId, blog) => axios.post('/posts/' + userId, blog),
  AddComment: (postId, comment) => axios.post('/comments/' + postId, comment)
}

export default api;
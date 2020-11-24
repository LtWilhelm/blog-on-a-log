import axios from 'axios'

const api = {
  SignIn: (signIn) => axios.post('http://localhost:3001/users/signin', signIn),
  Register: (register) => axios.post('http://localhost:3001/users/register', register),
  GetBlog: (id) => axios.get("/posts/" + id)
}

export default api;
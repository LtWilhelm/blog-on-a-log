import React, { useState } from 'react';
import api from '../../utils/api';
import { Modal } from '../Modal';
import { Redirect } from 'react-router-dom';

export const Register = () => {
  const [username, setSignInName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState('');

  const register = async (e) => {
    e.preventDefault();
    await api.Register({
      password,
      username,
      email
    });
    setRedirect('/signin');
  }

  return redirect ? <Redirect to={redirect} /> : (
    <Modal>
      <h2>Register</h2>
      <label>Username<input type="text" value={username} onChange={(e) => setSignInName(e.target.value)} /></label><br />
      <label>Email<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></label><br />
      <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label><br />
      <button onClick={register}>Sign In</button>
    </Modal>
  )
}
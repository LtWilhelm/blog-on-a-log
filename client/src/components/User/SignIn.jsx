import React, {useState} from 'react';
import api from '../../utils/api';
import { Modal } from '../Modal';
import {Redirect} from 'react-router-dom';

export const SignIn = () => {
  const [signInName, setSignInName] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState('');

  const signIn = async (e) => {
    e.preventDefault();
    console.log('hit');
    const {data} = await api.SignIn({
      password,
      signInName
    });
    console.log(data);
    localStorage.setItem('user', data);
    setRedirect('/')
  }
  
  return redirect ? <Redirect to={redirect} /> : (
    <Modal>
      <h2>Sign In</h2>
      <form>
        <label>Username or Email<input type="text" value={signInName} onChange={(e) => setSignInName(e.target.value)} /></label><br/>
        <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label><br/>
        <button onClick={signIn}>Sign In</button>
      </form>
    </Modal>
  )
}
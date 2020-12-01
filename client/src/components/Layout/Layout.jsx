import React from 'react';
import { NavBar } from './NavBar';

export const Layout = (props) => (
  <>
    <NavBar />
    <div className="container">
      {props.children}
    </div>
  </>
)
import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-2">
      <Link className="navbar-brand" to="/"><h1>Awesome Blog!</h1></Link>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><Link className="nav-link" to="/posts">Posts</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/posts/create">Create</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/user">User</Link></li>
        </ul>
      </div>
    </nav>
  )
}
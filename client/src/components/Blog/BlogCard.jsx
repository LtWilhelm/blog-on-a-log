import React from 'react'
import { Blurb } from '../Blurb'
import { DateDisplay } from '../Date'

export const BlogCard = ({ blog }) => {

  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <DateDisplay date={blog.date} />
        <Blurb content={blog.body} length={100} />
      </div>
    </div>
  )
}
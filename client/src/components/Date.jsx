import { format } from 'date-fns'
import React from 'react'

export const DateDisplay = ({ date }) => (
  <small>{format(new Date(date), "MMMM d, yyyy")}</small>
)
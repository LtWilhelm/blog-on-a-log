import React, { useEffect, useState } from 'react'

export const Blurb = ({ content, length }) => {
  const [blurb, setBlurb] = useState('');

  useEffect(() => {
    setBlurb(content.slice(0, length))
  }, [])

  return (
    blurb.length < content.length ? (
      <>
        <p>{blurb}...</p>
        <small><em>Read more -></em></small>
      </>
    ) : <p>{blurb}</p>
  )
}
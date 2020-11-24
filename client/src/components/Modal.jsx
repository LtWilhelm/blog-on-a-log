import React from 'react';

export const Modal = (props) => {
  return (
    <div style={{
      position: "fixed",
      display: 'grid',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: '#00000050'
    }}>
      <div style={{
        placeSelf: 'center',
        backgroundColor: '#dcdcdc',
        padding: 10
        }}>
          {props.children}          
      </div>
    </div>
  )
}
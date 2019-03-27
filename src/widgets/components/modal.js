import './modal.css';

import React from 'react';
import { Link } from 'react-router-dom'

function Modal(props) {
  return (
    <div className="Modal">
      {props.children}
      <Link to={{
        basename:'/videos'
      }}>
        <button
          onClick={props.handleClick}
          className="Modal-close"
        />
      </Link>
    </div>
  )
}

export default Modal;

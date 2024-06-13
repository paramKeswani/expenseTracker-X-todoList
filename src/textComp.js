import React from 'react';
import './textComp.css';

const TextComponent = ({ text }) => {
  return (
    <div className="text-card">
      <div className="card w-100 custom-card">
        <div className="card-body">
          <p className="text-center mb-0">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default TextComponent;

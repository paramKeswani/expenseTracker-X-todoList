import React from 'react';
import './card.css';

const Card = () => {
  return (
    <div className="card w-100 custom-card">
      <div className="card-body d-flex">
        <div className="info-section w-25">
          <p className="text-center">Left Info</p>
        </div>
        <div className="middle-section w-50 d-flex flex-column">
          <div className="d-flex justify-content-center mb-3">
            <input type="text" className="form-control" placeholder="Enter your question" />
          </div>
          <div className="d-flex justify-content-center mt-auto">
            <button className="btn btn-primary mr-2">Button 1</button>
            <button className="btn btn-secondary">Button 2</button>
          </div>
        </div>
        <div className="info-section w-25 text-center">
          <p>Right Info</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

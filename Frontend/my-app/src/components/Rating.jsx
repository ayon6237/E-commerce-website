import React from 'react';

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((rate) => (
        <span key={rate}>
          <i
            style={{ color: '#f8e825' }}
            className={
              value >= rate
                ? 'fas fa-star' 
                : value >= rate - 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
      ))}
      <span className="ms-2">{text && text}</span>
    </div>
  );
};

export default Rating;
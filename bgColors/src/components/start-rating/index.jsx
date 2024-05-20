import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css'

function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handlemouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handlemouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index +=1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => {
              handleClick(index);
            }}
            onMouseEnter={() => handlemouseEnter(index)}
            onMouseLeave={() => handlemouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default StarRating;

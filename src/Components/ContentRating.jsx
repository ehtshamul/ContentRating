import React, { useState } from 'react';
import './ContentRating.css';

function ContentRating() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0); 
  const total = like + dislike;
const rating = (like / total) * 100;
const stars = (rating / 100) * 5;



  return (
    <>
      <div className='content-rating'>
        <p>
          {/* Add text here */}
          This content allows users to express their feedback by liking or disliking.
        </p>
        <div className='rating-buttons'>
          <button className='like-button' onClick={() => setLike(like + 1)}>
            👍 Like ({like})
          </button>
          <button className='dislike-button' onClick={() => setDislike(dislike + 1)}>
            👎 Dislike ({dislike})
          </button>
        </div>
        <div className='total-rating'>  Total Reactions:  {((like + dislike) ).toFixed(0)} </div>
        <div>
  Total Rating: {stars.toFixed(1)} / 5
</div>

      </div>
    </>
  );
}

export default ContentRating;

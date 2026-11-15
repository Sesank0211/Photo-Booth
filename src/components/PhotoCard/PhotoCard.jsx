import React, { memo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import './PhotoCard.css';

function PhotoCard({ photo }) {
  const [likes, setLikes] = useState(0);

  return (
    <article className="photo-card">
      <div className="photo-frame">
        <img src={photo.download_url} alt={`Photograph by ${photo.author}`} loading="lazy" />
      </div>
      <div className="photo-meta">
        <div className="author-wrap"><span className="author-label">Photograph by</span><span className="author-name">{photo.author || 'Unknown photographer'}</span></div>
        <button className={`like-button${likes ? ' is-liked' : ''}`} type="button" onClick={() => setLikes((count) => count + 1)} aria-label={`Like photo by ${photo.author}; ${likes} likes`}>
          <FontAwesomeIcon icon={faThumbsUp} aria-hidden="true" />
          <span>{likes}</span>
        </button>
      </div>
    </article>
  );
}

export default memo(PhotoCard);

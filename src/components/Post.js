import React, { useState } from 'react';

import './Post.css';

import verifiedIcon from '../images/correct.svg';

const Post = ({ author, date, image }) => {
  const { photo, name, nickname } = author;

  const [content, setContent] = useState(
    'WTF? Who is Ray? Why she is Skywalker? Luke...?'
  );

  const [open, setOpen] = useState(false);

  const [isActive, setIsActive] = useState(false);

  const [likes, setLikes] = useState(887);

  const contentHandler = () => {
    setOpen((open) => !open);
    setContent(
      open
        ? 'WTF? Who is Ray? Why she is Skywalker? Luke...?'
        : 'WTF? Who is Ray? Why she is Skywalker? Luke...? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis praesentium aut similique nostrum dolorem quisquam fuga odio corporis laboriosam et. Nobis dolores expedita maiores neque, assumenda beatae eveniet vel perspiciatis!'
    );
  };

  const likeHandler = () => {
    setIsActive((isActive) => !isActive);
    !isActive ? setLikes((likes) => likes + 1) : setLikes(887);
  };

  return (
    <div className="single-post">
      <div className="post-avatar">
        <img src={photo} alt="author-icon" />
      </div>
      <div className="post-content">
        <div className="about-author">
          <h3 className="author-name">{name}</h3>
          <img src={verifiedIcon} alt="verified-icon" />
          <p>{nickname} &middot;</p>
          <span>{date}</span>
          <span className="arrow" onClick={contentHandler}>
            {open ? (
              <i className="fas fa-sort-up"></i>
            ) : (
              <i className="fas fa-sort-down"></i>
            )}
          </span>
        </div>
        <div className="post-text">
          <p>{content}</p>
        </div>
        <div className="post-image">
          <img src={image} alt="post-img" />
        </div>
        <div className="post-action">
          <div className="singleAction">
            <i className="far fa-comment-alt"></i>
            <p>482</p>
          </div>
          <div className="singleAction">
            <i className="fas fa-retweet"></i>
            <p>146</p>
          </div>
          <div className="singleAction" onClick={likeHandler}>
            {isActive ? (
              <i className="fas fa-heart"></i>
            ) : (
              <i className="far fa-heart"></i>
            )}
            <p>{likes}</p>
          </div>
          <div className="singleAction">
            <i className="fas fa-upload"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

import React from 'react';

function Card({ image, title, description, link, author }) {
  return (
    <div className="card card-bordered shadow-lg">
      <figure className="image-full">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src={author.avatar} alt={author.name} />
              </div>
            </div>
            <span className="ml-2">{author.name}</span>
          </div>
          <a href={link} className="btn btn-primary btn-sm">详情</a>
        </div>
      </div>
    </div>
  );
}

export default Card;

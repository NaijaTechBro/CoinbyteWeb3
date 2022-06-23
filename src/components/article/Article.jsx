import React from 'react';
import './article.css';

const Article = ({ imgUrl }) => (
  <div className="teenwolf__blog-container_article">
    <div className="teenwolf__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
  </div>
);

export default Article;

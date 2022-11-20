import React from 'react';
import ContentLoader from 'react-content-loader';

const CardLoader = () => (
  <div className="card-loader-container">
    <ContentLoader
      speed={2}
      width={300}
      height={300}
      viewBox="0 0 300 300"
      backgroundColor="#ecebeb"
      foregroundColor="#d6d2d2"
    >
      <rect x="0" y="25" rx="0" ry="0" width="150" height="150" />
      <rect x="180" y="25" rx="0" ry="0" width="100" height="20" />
      <rect x="180" y="70" rx="0" ry="0" width="100" height="20" />
      <rect x="180" y="115" rx="0" ry="0" width="100" height="20" />
      <rect x="180" y="160" rx="0" ry="0" width="100" height="20" />
    </ContentLoader>
  </div>
);

export default CardLoader;

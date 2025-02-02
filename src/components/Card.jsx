import React, { useState } from 'react';
import "../styles/Card.css";

function Card({ src, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="individualThemeCard"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      onMouseOver={() => {
        console.log("hovered");
        setIsHovered(true);
      }}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className={`titleAndDescription ${isHovered ? 'hovered' : ''}`}>
        <div className="bottomTitleBarForThemeCard">{title}</div>
        <div className="descriptionForThemeCardContainer">
          <p>{description}</p>
        </div>
      </div>
    </div >
  );
}

export default Card
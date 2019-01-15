
import React from 'react';

function EclipseLoader(props) {
  const { color = '#5f2a62', size = '100%' } = props;

  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
         preserveAspectRatio="xMidYMid">
      <path stroke="none"
            d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill={color} transform="rotate(323.454 50 51)">
        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" />
      </path>
    </svg>
  );
};

export default EclipseLoader;
import React from 'react';

interface StarProps {
  progress: number;
}

const Star: React.FC<StarProps> = ({ progress }) => {
  const fillPercentage = Math.min(Math.max(progress, 0), 1) * 100;

  return (
    <div className="relative w-6 h-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#E0E0E0"
        className="absolute top-0 left-0 w-full h-full"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#FFC107"
        className="absolute top-0 left-0 w-full h-full"
        style={{
          clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`,
        }}
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </div>
  );
};

export default Star;

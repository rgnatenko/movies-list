import React from 'react';

type Props = {
  stars: string[]
}

export const StarsBlock: React.FC<Props> = ({ stars }) => {
  return (
    <div>
      {stars.map(star => (
        <img
          key={star}
          src={star}
          alt=""
        />
      ))}
    </div>
  );
};

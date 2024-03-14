import React from 'react';

type Props = {
  stars: string[]
}

export const StarsBlock: React.FC<Props> = ({ stars }) => {
  return (
    <div>
      {stars.map((star, index) => (
        <img
          key={`${star}/${index}`}
          src={star}
          alt=""
        />
      ))}
    </div>
  );
};

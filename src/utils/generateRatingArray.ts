import { Rating } from '../types/Rating';

const filledstar = 'images/icons/Star-filled.svg';
const star = 'images/icons/Star.svg';

export const generateRatingArray = (): (Rating | string)[] => {
  const start = 1;
  const end = 10;
  const res: (Rating | string)[] = ['Any genre'];

  for (let rating = start; rating <= end; rating++) {
    const stars = new Array(end).fill(star);
    stars.fill(filledstar, 0, rating);

    res.push({ stars, rating });
  }

  return res;
};

import { Rating } from '../types/Rating';

const filledStar = `${process.env.PUBLIC_URL}/images/icons/Star-filled.svg`;
const halfStar = `${process.env.PUBLIC_URL}/images/icons/Star-half.svg`;
const star = `${process.env.PUBLIC_URL}/images/icons/Star.svg`;

const STARS_TOTAL_COUNT = 10;

const generateRatingArray = (): (Rating | string)[] => {
  const start = 1;
  const end = STARS_TOTAL_COUNT;
  const res: (Rating | string)[] = ['Any genre'];

  for (let rating = start; rating <= end; rating++) {
    const stars = new Array(end).fill(star);
    stars.fill(filledStar, 0, rating);

    res.push({ stars, rating });
  }

  return res;
};

const createMovieRating = (rating: number) => {
  if (Number.isFinite(rating)) {
    const foundRating = generateRatingArray()
      .find(el => typeof el !== 'string' && el.rating === rating) as Rating | null;

    if (foundRating) {
      return foundRating.stars;
    }
  }

  const normalizedRating = Math.floor(rating);

  return Array.from({ length: STARS_TOTAL_COUNT }, (_, index) => {
    if (index < normalizedRating) return filledStar;
    if (index === normalizedRating) return halfStar;
    return star;
  });
};

export const rating = {
  generateRatingArray,
  createMovieRating,
};

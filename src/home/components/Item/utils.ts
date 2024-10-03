import {AnimationName} from './types';

export const getRandomAnimation = () => {
  const randomIndex = Math.floor(Math.random() * 3);

  switch (randomIndex) {
    case 0:
      return require('./animations/car.lottie');

    case 1:
      return require('./animations/coffee-maker.lottie');

    case 2:
      return require('./animations/crab.lottie');
  }
};

export const getAnimation = (name: AnimationName) => {
  switch (name) {
    case 'car':
      return require('./animations/car.lottie');

    case 'coffee-maker':
      return require('./animations/coffee-maker.lottie');

    case 'crab':
      return require('./animations/crab.lottie');

    default:
      return require('./animations/crab.lottie');
  }
};

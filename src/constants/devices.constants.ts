import breakpoints from './breakpoints.constants';

const devices = {
  xSmall: `min-width: ${breakpoints.xSmall.min}px`,
  small: `min-width: ${breakpoints.small.min}px`,
  medium: `min-width: ${breakpoints.medium.min}px`,
  large: `min-width: ${breakpoints.large.min}px`,
  xLarge: `min-width: ${breakpoints.xLarge.min}px`,
};

export default devices;

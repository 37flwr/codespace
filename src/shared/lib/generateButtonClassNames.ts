const generateVariantClassName = (variant?: 'filled' | 'bordered'): string => {
  switch (variant) {
    case 'filled':
      return 'filled';
    case 'bordered':
      return 'bordered';
    default:
      return 'unfilled';
  }
};

const generateSizeClassName = (size?: 'small' | 'big'): string => {
  switch (size) {
    case 'small':
      return 'small-btn';
    case 'big':
      return 'big-btn';
    default:
      return 'small-btn';
  }
};

export { generateVariantClassName, generateSizeClassName };

const generateVariantClassName = (variant?: 'filled'): string => {
  switch (variant) {
    case 'filled':
      return 'filled';
    default:
      return '';
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

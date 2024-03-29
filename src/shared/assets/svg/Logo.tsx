import ThemeAwareIcon from '../../ui/theme-aware/ThemeAwareIcon';

const IconLogo = ({ className }: { className?: string }): JSX.Element => {
  return (
    <ThemeAwareIcon>
      <svg
        width="37"
        height="45"
        viewBox="0 0 37 45"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="15" cy="30" r="15" fill="currentColor" />
        <circle cx="29.5" cy="7.5" r="7.5" fill="currentColor" />
      </svg>
    </ThemeAwareIcon>
  );
};

export default IconLogo;

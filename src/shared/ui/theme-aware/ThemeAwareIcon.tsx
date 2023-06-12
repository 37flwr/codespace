import { type FC, type PropsWithChildren } from 'react';
import './styles.scss';

const ThemeAwareIcon: FC<PropsWithChildren> = ({ children }) => {
  return <div className="theme-aware-icon">{children}</div>;
};

export default ThemeAwareIcon;

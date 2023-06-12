import { type FC } from 'react';
import { Link } from 'react-router-dom';
import IconLogo from '../../../shared/assets/svg/Logo';

const HeaderLogo: FC = () => {
  return (
    <Link to="/" className="header-logo-container text-heading">
      <IconLogo className="header-logo" />
      <span className="header-logo-text">Codespace</span>
    </Link>
  );
};

export default HeaderLogo;

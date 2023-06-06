import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CodespaceLogo } from '../../../shared/assets/svg/CodespaceLogo.svg';

const HeaderLogo: FC = () => {
  return (
    <Link to="/" className="header-logo-container text-heading">
      <CodespaceLogo className="header-logo" />
      <span className="header-logo-text">Codespace</span>
    </Link>
  );
};

export default HeaderLogo;

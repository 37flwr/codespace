import Typer from '../../Typer';
import IconLogo from '../../../shared/assets/svg/Logo';
import typeString from '../../../shared/constants/typeStrings';
import './styles.scss';

const TopSnippet = (): JSX.Element => (
  <div className="top-snippet_container">
    <div className="top-snippet_blur" />
    <div className="top-snippet_container_background" />
    <div className="top-snippet">
      <div className="top-snippet__header">
        <span className="top-snippet__header__leftside">+ Start a new project</span>
        <div className="top-snippet__header__logo">
          <IconLogo className="top-snippet__header__logo__svg" />
          <span className="top-snippet__header__logo__text">Codespace</span>
        </div>
        <span className="top-snippet__header__rightside">Profile</span>
      </div>
      <div className="top-snippet__typer">
        <Typer text={typeString} />
      </div>
    </div>
  </div>
);

export default TopSnippet;

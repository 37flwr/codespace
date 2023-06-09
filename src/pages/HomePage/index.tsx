import { type FC } from 'react';
import Typer from '../../widgets/Typer';
import { DefaultButton } from '../../shared/ui/buttons';
import { ReactComponent as CodespaceLogo } from '../../shared/assets/svg/CodespaceLogo.svg';
import typeString from '../../shared/constants/typeStrings';

import './styles.scss';

const HomePage: FC = () => {
  return (
    <section className="home-page">
      <div className="home-page__hero">
        <h1 className="home-page__hero__heading">Build things online</h1>
        <h4 className="home-page__hero__text">
          Codespace enables users to build beatiful web applications right in the browser
        </h4>
        <DefaultButton text="</> Code" path="/editor" variant="filled" />
      </div>
      <div className="home-page__snippet_container">
        <div className="home-page__snippet_blur" />
        <div className="home-page__snippet_container_background" />
        <div className="home-page__snippet">
          <div className="home-page__snippet__header">
            <span className="home-page__snippet__header__leftside">+ Start a new project</span>
            <div className="home-page__snippet__header__logo">
              <CodespaceLogo />
              <span className="home-page__snippet__header__logo__text">Codespace</span>
            </div>
            <span className="home-page__snippet__header__rightside">Profile</span>
          </div>
          <div className="home-page__snippet__typer">
            <Typer text={typeString} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

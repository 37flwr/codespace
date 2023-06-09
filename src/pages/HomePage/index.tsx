import { type FC } from 'react';
import Typer from '../../widgets/Typer';
import { DefaultButton } from '../../shared/ui/buttons';
import { ReactComponent as CodespaceLogo } from '../../shared/assets/svg/CodespaceLogo.svg';
import typeString from '../../shared/constants/typeStrings';

import './styles.scss';

const HomePage: FC = () => {
  return (
    <section id="home-page">
      <div className="hero-part">
        <h1 className="hero-heading">Build things online</h1>
        <h4 className="hero-text">
          Codespace enables users to build beatiful web applications right in the browser
        </h4>
        <DefaultButton text="</> Code" path="/editor" variant="filled" />
      </div>
      <div className="snippet-part">
        <div className="snippet-background" />
        <div className="snippet">
          <div className="snippet-header">
            <span className="snippet-leftside">+ Start a new project</span>
            <div className="snippet-logo">
              <CodespaceLogo />
              <span className="snippet-logo-text">Codespace</span>
            </div>
            <span className="snippet-rightside">Profile</span>
          </div>
          <div className="typing-container">
            <Typer text={typeString} />
          </div>
        </div>
        <div className="snippet-blur" />
      </div>
    </section>
  );
};

export default HomePage;

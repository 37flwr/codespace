import DefaultButton from '../../components/Buttons/DefaultButton';
import { ReactComponent as CodespaceLogo } from '../../assets/CodespaceLogo.svg';

import './styles.scss';

const HomePage = () => {
  return (
    <section id='home-page'>
      <div className="hero-part">
        <h1 className="hero-heading">
          Build things online
        </h1>
        <h4 className="hero-text">
          Codespace enables users to build beatiful web applications right in the browser
        </h4>
        <DefaultButton
          text='</> Code'
          onClick='/editor'
          customClassName='filled'
        />
      </div>
      <div className="snippet-part">
        <div className="snippet-blur" />
        <div className="snippet">
          <div className="snippet-header">
            <span className="snippet-leftside">
              + Start a new project
            </span>
            <div className="snippet-logo">
              <CodespaceLogo className="snippet-logo-icon" />
              Codespace
            </div>
            <span className="snippet-rightside">
              Profile
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
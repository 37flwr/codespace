import Typewriter from "typewriter-effect";
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
              <CodespaceLogo />
              <span className="snippet-logo-text">
                Codespace
              </span>
            </div>
            <span className="snippet-rightside">
              Profile
            </span>
          </div>
          <div className="typing-container">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter)=> {
              typewriter
              .typeString(
                `contract Campaign is Ownable {\n\tuint public minimumContribution;\n\tuint public totalApprovers;\n\n\tstruct Request{\n\t\tstring description;\n\t\tuint value;\n\t\taddress recepient;\n\t\tbool complete;\n\t\tuint approvalCount;\n\t\tuint timestamp;\n\t\tmapping(address => bool) approvals;\n\t}\n\tRequest[] public requests;\n\tmapping(address => bool) public approvers;\n\n\tconstructor(uint minimum) {\n\t\tminimumContribution = minimum;\n\t}\n\n\tfunction contribute() public payable {\n\t\trequire(msg.value > minimumContribution);`
              )
              .pauseFor(5000)
              .deleteAll()
              .typeString("Welcomes You")
              .start();
              }}
            />
          </div>
        </div>
        <div className="snippet-transparent"/>
      </div>
    </section>
  )
}

export default HomePage
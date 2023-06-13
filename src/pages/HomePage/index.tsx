import { type FC } from 'react';
import TopSnippet from '../../entities/snippets/TopSnippet';
import { RectangleButton } from '../../shared/ui/buttons';
import './styles.scss';

const HomePage: FC = () => {
  return (
    <section className="home-page">
      <div className="home-page__hero">
        <h1 className="home-page__hero__heading">Build things online</h1>
        <h4 className="home-page__hero__text">
          Codespace enables users to build beatiful web applications right in the browser
        </h4>
        <RectangleButton variant="filled" path="/editor">
          {'</> Code'}
        </RectangleButton>
      </div>
      <TopSnippet />
    </section>
  );
};

export default HomePage;

import { RectangleButton } from '../../../shared/ui/buttons';
import './styles.scss';

const BottomSnippet = (): JSX.Element => (
  <div className="bottom-snippet_container">
    <div className="bottom-snippet_blur" />
    <div className="bottom-snippet_container_background" />
    <div className="bottom-snippet">
      <RectangleButton path="/editor" variant="filled">
        {'</> Code'}
      </RectangleButton>
    </div>
  </div>
);

export default BottomSnippet;

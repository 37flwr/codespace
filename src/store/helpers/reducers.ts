import { combineReducers } from 'redux';

import Theme from '../ducks/theme/reducers';
import CodeEditor from '../ducks/code-editor/reducers';

const rootReducer = combineReducers({ Theme, CodeEditor });

export default rootReducer;

import { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import BaseHeader from './BaseHeader';
import EditorHeader from './EditorHeader';

import type IHeader from '../../shared/interfaces/IHeader.interface';

const Header: FC<IHeader> = ({ themeHandler, currentTheme }) => {
  return (
    <Routes>
      {['/editor', '/settings'].map((path, index) => (
        <Route
          path={path}
          element={<EditorHeader themeHandler={themeHandler} currentTheme={currentTheme} />}
          key={index}
        />
      ))}
      <Route
        path="*"
        element={<BaseHeader themeHandler={themeHandler} currentTheme={currentTheme} />}
      />
    </Routes>
  );
};

export default Header;

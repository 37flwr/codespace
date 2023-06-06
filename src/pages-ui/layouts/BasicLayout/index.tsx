// import Header from "../Header";
import { type FC, type PropsWithChildren } from 'react';
import Header from '../../headers';

import type IHeader from '../../../shared/interfaces/IHeader.interface';

import './styles.scss';

interface ILayout extends IHeader, PropsWithChildren {}

const BasicLayout: FC<ILayout> = ({ children, currentTheme, themeHandler }) => {
  return (
    <>
      <Header currentTheme={currentTheme} themeHandler={themeHandler} />
      {children}
    </>
  );
};

export default BasicLayout;

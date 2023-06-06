// import Header from "../Header";
import { FC, PropsWithChildren } from "react";
import Header from "../../widgets/Header";
import "./styles.scss";

interface IBasicLayout extends PropsWithChildren {
  currentTheme: string;
  themeHandler: () => void;
}

const BasicLayout: FC<IBasicLayout> = ({
  children,
  currentTheme,
  themeHandler,
}) => {
  return (
    <>
      <Header themeHandler={themeHandler} currentTheme={currentTheme} />
      {children}
    </>
  );
};

export default BasicLayout;

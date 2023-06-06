// import Header from "../Header";
import Header from "../../widgets/Header";
import "./styles.scss";

const BasicLayout = ({ children, currentTheme, themeHandler }) => {
  return (
    <>
      <Header themeHandler={themeHandler} currentTheme={currentTheme} />
      {children}
    </>
  );
};

export default BasicLayout;

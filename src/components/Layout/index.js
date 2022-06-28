import Header from './Header';
import './styles.scss';

const Layout = ({ children, currentTheme, themeHandler }) => {
  return (
    <>
        <Header themeHandler={themeHandler} currentTheme={currentTheme} />
        {children}
    </>
  )
}

export default Layout
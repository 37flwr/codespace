import Header from './Header';
import './styles.scss';

const Layout = ({ children, themeHandler }) => {
  return (
    <>
        <Header themeHandler={themeHandler} />
        {children}
    </>
  )
}

export default Layout
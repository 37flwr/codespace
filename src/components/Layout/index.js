import Header from './Header';
import './styles.scss';

const Layout = ({ children }) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default Layout
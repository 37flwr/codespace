import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { publicRoutes } from './routes/routeList'
import './App.scss';
import Layout from './components/Layout';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
            <Routes>
            {publicRoutes.map(
              ({ path, component: Component, exact }, idx) => {
                return <Route
                key={idx}
                path={path}
                exact={exact}
                element={<Component />}
                />
              })
            }
            </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
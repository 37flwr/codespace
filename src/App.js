import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { publicRoutes } from './routes/routeList'
import { persistor } from './store';
import './App.scss';
import Layout from './components/Layout';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
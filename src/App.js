import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import useLocalStorage from 'use-local-storage'
import { publicRoutes } from './routes/routeList'
import { persistor } from './store';
import Layout from './components/Layout';
import store from './store';
import './App.scss';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <div className="App" data-theme={theme}>
              <Layout
                themeHandler={switchTheme}
                currentTheme={theme}
              >
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
            </div>
          </Router>
        </PersistGate>
      </Provider>
  );
}

export default App;
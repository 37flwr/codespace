import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { publicRoutes } from './routes/routeList'
import { persistor } from './store';
import useLocalStorage from 'use-local-storage'
import './App.scss';
import Layout from './components/Layout';
import store from './store';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  console.log(theme);
  
  const switchTheme = () => {
    console.log(1);
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className="app" data-theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Layout
              themeHandler={switchTheme}
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
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
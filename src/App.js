import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import useLocalStorage from "use-local-storage";
import AppRoutes from "./routes/routeList";
import Layout from "./pages-ui/BasicLayout";

import store, { persistor } from "./store";
import "./App.scss";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <div className="App" data-theme={theme}>
            <Layout themeHandler={switchTheme} currentTheme={theme}>
              {/* <Routes>
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
                  </Routes> */}
              <AppRoutes />
            </Layout>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;

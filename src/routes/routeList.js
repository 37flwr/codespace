import { useRoutes } from "react-router";

import EditorPage from "../pages/EditorPage";
import HomePage from "../pages/HomePage";

const publicRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/editor",
    element: <EditorPage />,
  },
];

const AppRoutes = () => {
  return useRoutes(publicRoutes);
};

export default AppRoutes;

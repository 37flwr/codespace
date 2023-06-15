import { createHashRouter, RouterProvider } from 'react-router-dom';

import EditorPage from '../pages/EditorPage';
import HomePage from '../pages/HomePage';

const publicRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/editor',
    element: <EditorPage />,
  },
];

const router = createHashRouter(publicRoutes);

const AppRoutes = (): JSX.Element | null => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;

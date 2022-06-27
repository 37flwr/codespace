import EditorPage from '../pages/EditorPage'
import HomePage from '../pages/HomePage'

export const publicRoutes = [
    {
        path: `/`,
        exact: true,
        component: HomePage,
    },
    {
        path: `/editor`,
        exact: true,
        component: EditorPage,
    },
]
import { LayoutPage } from '@/pages/layout/layout'
import { createBrowserRouter } from 'react-router-dom'
import { HOMEPAGE } from './routes'

export const router = createBrowserRouter([
    {
        path: HOMEPAGE,
        element: <LayoutPage />,
    },
])

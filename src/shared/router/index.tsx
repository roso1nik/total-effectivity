import LayoutPage from '@/pages/layout/layout'
import { createBrowserRouter } from 'react-router-dom'
import { HOMEPAGE } from './routes'
import { Tracker } from '@/features/tracker/tracker'
import { ErrorBoundaryPage } from '@/components/errors/fatal-error'

export const router = createBrowserRouter([
    {
        path: HOMEPAGE,
        element: <LayoutPage />,
        children: [{ path: '', element: <Tracker /> }],
        errorElement: <ErrorBoundaryPage />,
    },
])

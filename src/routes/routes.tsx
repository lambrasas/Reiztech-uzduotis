import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Favorites from '../pages/Favorites'
import App from '../App'
import NotFound from '../pages/NotFound'
import IndividualShowPage from '../pages/IndividualShowPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: '/show/:id',
        element: <IndividualShowPage />,
      },
    ],
  },
])

import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'
import Home from '../Pages/Home/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  }
])

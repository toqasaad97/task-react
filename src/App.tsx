
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from './component /Layout';
import Home from './component /Home/Home';
import Portfolio from './component /portofilo/portofilo';
import Contact from './component /contact/Contact';
import About from './component /About/About';
import ErrorPage from './ERROR/ErrorPage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout  />,
    children: [
      { index: true, element: <Home />}
      ,
      { path: '/about', element: <About/>},
      { path: '/portfolio', element: <Portfolio/>},
      { path: '/contact', element: <Contact/>},
      { path: '*', element: <ErrorPage/>  
      },

    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Me from './pages/Me.tsx';
import Breathe from './components/Breathe.tsx';
import Resources from './pages/Resources.tsx';

const home = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/me",
    element: <Me />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
  {
    path: "/breathe",
    element: <Breathe />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={home} />
  </StrictMode>,
)

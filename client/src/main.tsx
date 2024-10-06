import '@mantine/core/styles.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Me from './pages/Me.tsx';
import Breathe from './components/Breathe.tsx';
import Resources from './pages/Resources.tsx';
import Onboarding1 from './components/onboarding/Onboarding1.tsx';
import Onboarding2 from './components/onboarding/Onboarding2.tsx';
import Onboarding3 from './components/onboarding/Onboarding3.tsx';
import Onboarding4 from './components/onboarding/Onboarding4.tsx';
import Home from './pages/Home.tsx';
import Test from './pages/test.tsx';
import ChallengeProgressPage from './pages/ChallengeProgressPage.tsx';

const home = createBrowserRouter([
  {
    path: "/",
    element: <Onboarding1 />,
  },
  {
    path: "/onboarding/2",
    element: <Onboarding2 />,
  },
  {
    path: "/onboarding/3",
    element: <Onboarding3 />,
  },
  {
    path: "/onboarding/4",
    element: <Onboarding4 />,
  },
  {
    path: "/breatheIntro",
    element: <App />,
  },
  {
    path: "/breathe",
    element: <Breathe />,
  },
  {
    path: "/home",
    element: <Home />,
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
  {
    path: "/test",
    element: <Test />,
  },{
    path: "/challengeProgress",
    element: <ChallengeProgressPage />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={home} />
  </StrictMode>,
)

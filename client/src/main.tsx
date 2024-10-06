import '@mantine/core/styles.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import firebaseConfig from './firebaseConfig.json';
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
import AddHabit from './components/AddHabit.tsx';
import ChallengeProgressPage from './pages/ChallengeProgressPage.tsx';
import {app, messaging} from './firebaseConfig.ts';
import { getToken } from 'firebase/messaging';
import { getCookie } from './cookie';
import { setToken } from './api';

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
  },
  {
    path: "/addHabit",
    element: <AddHabit />,
  },
  {
    path: "/challengeProgress",
    element: <ChallengeProgressPage />,
  }
]);

function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
    }
  });
}

requestPermission();

getToken(messaging, { vapidKey: firebaseConfig.vapidKey }).then((token) => {
    console.log("kill me")
    if (token) {
        const cook = getCookie("username")
        console.log("COOKIE: ", cook, " | TOKEN: ", token)
        if (cook === "") return;
        setToken(cook, token);
    } else {
        console.log('No registration token available. Request permission to generate one.');
    }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={home} />
  </StrictMode>,
)


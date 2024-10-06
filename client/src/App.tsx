import React from 'react';
import { MantineProvider } from '@mantine/core';
import { BreatheHeader } from './components/breatheHeader/BreatheHeader'
import './App.css'
import Home from './pages/Home';

function App() {

  return (
    <>
      <div>
      <MantineProvider >
        <BreatheHeader />
        </MantineProvider>
      </div>
    </>
  )
}

export default App

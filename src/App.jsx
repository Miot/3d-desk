import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'

function App() {

  return (
    <div className='fixed inset-0 flex flex-col md:flex-row'>
      <div className='md:w-3/5 w-full h-1/3 md:h-full'>
        <Canvas>
          <Experience />
        </Canvas>
      </div>
      <div className='md:w-2/5 w-full h-2/3 md:h-full bg-white p-4'>配置区</div>
    </div>
  )
}

export default App

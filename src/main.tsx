import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM  from 'react-dom/client'
import React from 'react'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <App></App>
    </BrowserRouter>
  </React.StrictMode>
)
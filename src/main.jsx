import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Usuario from './routes/Usuario.jsx'


//criando a função pai
const router = createBrowserRouter([{
  //Elemento Pai
  path: '/', element:<App/>,
  errorElement:<Error/>,

  //Elemento Filho
  children:[
    {path:'/', element:<Home/>},
    {path:'/login', element:<Login/>},
    {path:'/usuario', element:<Usuario/>}    
  ]
}
])








createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
import { Login } from './pages/Login'
import { DecimaQuintaAula } from './aulas/16Aula'
import { DecimaQuartaAula } from './aulas/14Aula'
import { DhGames } from './pages/DHGAMES'
import {MainLayout} from './components/MainLayout'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";



function App() {

  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children:[
        {
          path: '14aula',
          element: <DecimaQuartaAula />, 
        },
        {
          path: '15aula',
          element: <DecimaQuintaAula />, 
        }
      ]
    },
  ]);
  

  return (
    <>  
    
   <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
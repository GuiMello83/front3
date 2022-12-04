import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom"
  import { SegundaAula } from './aulas/02Aula'
  import { TerceiraAula } from './aulas/03Aula'
  import { QuartaAula } from './aulas/04Aula'
  import { QuintaAula } from './aulas/05Aula'
  import { SetimaAula } from './aulas/07Aula'
  import { SetimaAulaDesafio } from './aulas/07AulaDesafio'
  import { DecimaQuintaAula } from './aulas/16Aula'
  import { DecimaQuartaAula } from './aulas/14Aula'
  import { ThemeProvider } from "./hooks/useTheme"
  import { MainLayout } from "./components/MainLayout"
  import { ToDo } from "./pages/ToDo"
  
  function App() {
  
    const appRouter = createBrowserRouter([
      {
        path: '',
        element: <MainLayout />,
        children: [
          
          {
            path: '02aula',
            element: <SegundaAula />
          },
          {
            path: '03aula',
            element: <TerceiraAula />
          },
          {
            path: '04aula',
            element: <QuartaAula />
          },
          {
            path: '05aula',
            element: <QuintaAula />
          },
          {
            path: '07aula',
            element: <SetimaAula />
          },
          {
            path: '07aulaDesafio',
            element: <SetimaAulaDesafio />
          },
          {
            path: '14aula',
            element: <DecimaQuartaAula />
          },
          {
            path: '15aula',
            element: <DecimaQuintaAula />
          },
          {
            path: 'configurations',
            element: <Configurations />
          },
          {
            path: 'to-do',
            element: <ToDo />
          },
            {
        path: 'to-do',
        element: <ToDo />
      }
    ]
  }
    ])
  
    return (
      <RouterProvider router={appRouter} />
    )
  
  }
  
  export default App
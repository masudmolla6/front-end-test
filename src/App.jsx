import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Main from "./Layout/Main"
import Home from "./components/Home/Home"
import Content from "./components/Content/Content"
import Chart from "./components/Chart/Chart"
import Topics from "./components/Topics/Topics"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Content></Content>
        },
        {
          path: '/quiz/:subjectId',
          loader: ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.subjectId}`)
          },
          element: <Topics></Topics>
        },
        {
          path: 'home',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element:<Content></Content>
        },
        {path:'chart', element:<Chart></Chart>}
      ]
    },
    {path:'*', element: <h1 className="text-center text-5xl">Not Found 404 !!!</h1>}
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Main from "./Layout/Main"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Content from "./components/Content/Content"
import Chart from "./components/Chart/Chart"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: 'home', element: <Home></Home> },
        { path: 'content', element: <Content></Content> },
        {path:'chart', element:<Chart></Chart>},
        { path: 'About', element: <About></About> }
      ]
    }
  ])

  return (
    <>
      
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

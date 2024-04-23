import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/portfolio/portfolio';
import Contact from './Components/Contact/Contact';
import NOtFound from './Components/NOtFound/NOtFound';

function App() {
  let routes=createBrowserRouter([{path:"/",element:<Layout/>,children:[
    {path:"/",element:<Home/>},
    {path:"about",element:<About/>},
    {path:"portfolio",element:<Portfolio/>},
    {path:"contact",element:<Contact/>},
    {path:"*",element:<NOtFound/>}
  ]}
])
  return (
<>
<RouterProvider router={routes}></RouterProvider>

</>
  );
}

export default App;

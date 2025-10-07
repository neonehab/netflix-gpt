import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { createBrowserRouter } from "react-router-dom";
import Browse from "./components/Browse";
import { RouterProvider } from "react-router";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body/>
    },
     {
      path: "/browse",
      element: <Browse/>
    }
  ])
  return (
    
    <div>
       <Provider store={appStore}>
        <RouterProvider router= {appRouter}></RouterProvider>
      </Provider>
    </div>
  )
 
}

export default App;

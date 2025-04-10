import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import UserLogin from './components/UserLogin/UserLogin';
import AllUsers from './components/AllUsers/AllUsers';
import UserDetails from './components/UserDetails/UserDetails';
let router=createBrowserRouter([
  {
   path:"/",
   element:<UserLogin/>,
  },
    
   {  
       path:'/all-users',
       element:<AllUsers/>
   },
   {
     path:'/user/:id',
     element:<UserDetails/>
   }
])


function App() {
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

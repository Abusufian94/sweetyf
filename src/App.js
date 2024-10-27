import Main from "./components/Main";
import Header from "./components/Layouts/Header";
import Example from "./components/Example";
import { createBrowserRouter,Navigate,RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import store from "./utils/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import Body from "./components/Body";
import DeveloperLogin from "./components/developer/DeveloperLogin";
const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token');

  return token ? element : <Navigate to="/login" />;
};

const appRouter = createBrowserRouter([
  {
  path:"/",
  element:<Example/>,
},
{
  path:"/login",
  element:<Login/>,
 
},
{
  path:"/dashboard",
  element:<ProtectedRoute element={<Body />} />,
 
},
{
  path:"/admin/login",
  element:<AdminLogin/>
},
{
  path:"/dev/login",
  element:<DeveloperLogin/>
}
])
function AdminWrapper({ children }) {
  const isDarkMode = useSelector((state) => {
    return state.admintheme?.isDarkMode||false;
  });  return (
    <div className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      {children}
    </div>
  );
}
function App() {

  return (
    <Provider store={store}>
      <AdminWrapper>
        <RouterProvider router={appRouter} />
      </AdminWrapper>

    </Provider>
  );
}

export default App;

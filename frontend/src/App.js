import { useContext } from 'react';
import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import Settings from './pages/Settings';
import ErrorPage from './pages/ErrorPage';
import Vouchers from './pages/Vouchers';
import Login from './pages/Login';
import Register from './pages/Register';
import NavigationBar from './components/NavigationBar';
import AuthContext from './context/AuthContext';
import { Navigate, Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';


function App() {

  const { vendor } = useContext(AuthContext);
  const queryClient = new QueryClient();

  function Layout() {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="relative min-h-screen flex bg-white text-black">
          <NavigationBar />
          <div className='ml-10 mt-10 w-10/12'>
            <Outlet />
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!vendor || vendor === undefined) {
      return <Navigate to="/login" />;
    } else {
    return children;
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "vouchers",
          element: <Vouchers />,
        },
        {
          path: "documents",
          element: <Documents />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/*",
      element: <ErrorPage />,
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
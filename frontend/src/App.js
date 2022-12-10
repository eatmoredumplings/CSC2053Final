import { useContext } from 'react';
import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import Settings from './pages/Settings';
import ErrorPage from './pages/ErrorPage';
import VoucherPage from './pages/VoucherPage';
import Login from './pages/Login';
import Register from './pages/Register';
import NavigationBar from './components/NavigationBar';
import { Navigate, Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthContext from './context/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';


function App() {

  const { user } = useContext(AuthContext);
  const queryClient = new QueryClient();

  function Layout () {
    return (
      <QueryClientProvider client={queryClient}>
        <div className= "relative min-h-screen flex">
          <NavigationBar />
          <Outlet />
        </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
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
          element: <VoucherPage />,
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
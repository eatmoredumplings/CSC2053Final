import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import Settings from './pages/Settings';
import ErrorPage from './pages/ErrorPage';
import VoucherPage from './pages/VoucherPage';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className= "relative min-h-screen flex">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/vouchers" element={<VoucherPage />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>

  );
}


export default App;
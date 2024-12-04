import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import GetStarted from './components/GetStarted';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Product from './components/Product';

const AppContent = () => {
  const location = useLocation();
  const isGetStartedPage = location.pathname === '/get-started';
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            {/* Add other home page components here */}
          </main>
        } />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/products" element={<Product />} />
        {/* Add other routes here */}
      </Routes>
      {!isGetStartedPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
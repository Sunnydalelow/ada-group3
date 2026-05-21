import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import ChatWidget from '@components/common/ChatWidget';
import Home from '@pages/Home';
import Resources from '@pages/Resources';
import Support from '@pages/Support';
import Dashboard from '@pages/Dashboard';
import SearchResults from '@pages/SearchResults';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/support" element={<Support />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </BrowserRouter>
  );
}

export default App;

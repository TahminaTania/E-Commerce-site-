import './App.css';
import Top from './Designs/Top2/Top';
import TopNav from './Designs/Top2/TopNav';
import Footer from './Footer/Footer';
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import ShopPage from './Pages/ShopPage';
import ContactPage from './Pages/ContactPage';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';



function App() {
  return (
    <main>
      <Router>
        <div className='App'>
          <Top/>
          <TopNav/>

             <Routes>

              <Route path="/" element={<Home/>}  exact />
              <Route path="/blog" element={<BlogPage/>}  exact />
              <Route path="/shop" element={<ShopPage/>}  exact />
              <Route path="/contact" element={<ContactPage/>}  exact />

            </Routes>
        </div>
      </Router>


      <Footer/>                 
    </main>
  );
}

export default App;

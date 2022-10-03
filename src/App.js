import './App.css';
import TopNav from './Designs/Top2/TopNav';
import Footer from './Footer/Footer';
import Home from './Pages/Home';
import BlogPage from './Pages/Blog/BlogPage';
import ShopPage from './Pages/Shop/ShopPage';
import ContactPage from './Pages/Contact/ContactPage';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Size from './Pages/Shop/Size';
import Color from './Pages/Shop/Color';



function App() {
  return (
    <main>
      <Router>
        <div className=''>
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

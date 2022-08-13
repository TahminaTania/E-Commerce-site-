import './App.css';
import Top from './Designs/Top2/Top';
import TopNav from './Designs/Top2/TopNav';
import Slider from './Designs/SideBar/Slider';
import Nav from './Designs/Nav';
import Products from './Items/Products';
import Break from './Designs/Top2/Break';
import AllDept from './Designs/Top2/AllDept';
import Offers from './Items/Offers';
import Motion from './Designs/SideBar/Motion';
import Blog from './Designs/Blog/Blog';
import LTRproducts from './Carousel/LTRproducts'
import Footer from './Footer/Footer';



function App() {
  return (
    <main>
      <Top/>
      <TopNav/>
      <Nav/>
      <Motion/>
      <Products/>
      <Offers/>
      <LTRproducts/>
      <Blog/>
      <Footer/>                 
    </main>
  );
}

export default App;

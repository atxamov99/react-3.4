<<<<<<< HEAD
import Header from './Header';
import FilterBar from './FilterBar';
import ProductList from './ProductList';
import SpecialOffers from './SpecialOffers';
import Footer from './Footer';
=======
import Header from './components/Header';git push
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList'; 
import SpecialOffers from './components/SpecialOffers';
import Footer from './components/Footer';
>>>>>>> 270ce3b (O'zgarishlar commit qilindi)

function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <FilterBar />
      <ProductList />
      <SpecialOffers />
      <Footer />
    </div>
  );
}

export default Home;

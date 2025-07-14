import Header from './components/Header';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList'; 
import SpecialOffers from './components/SpecialOffers';
import Footer from './components/Footer';

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
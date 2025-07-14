import Header from './Header';
import FilterBar from './FilterBar';
import ProductList from './ProductList';
import SpecialOffers from './SpecialOffers';
import Footer from './Footer';

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

import Header from "../pages/components/Header";
import Footer from "../pages/components/Footer";
import Banner from "../pages/components/HomePageBanner";
import Category from "../pages/components/Category";
import ProductList from "../pages/components/ProductList";

let dataProducts = '/products';

export default function Home({ isLogin }) {

  return (
    <section>
      <Header isLogin={isLogin} />
      <Banner />
      <Category />
      <ProductList /><br />
      <Footer />
    </section>
  );
}

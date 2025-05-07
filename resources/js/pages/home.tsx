import Header from "../pages/components/Header";
import Footer from "../pages/components/Footer";
import Banner from "../pages/components/HomePageBanner";
import Category from "../pages/components/Category";
import ProductList from "../pages/components/ProductList";

  export default function Gallery() {
    return (
      <section>
        <Header />
        <Banner />
        <Category />
        <ProductList /><br />
        <Footer />
      </section>
    );
  }
  
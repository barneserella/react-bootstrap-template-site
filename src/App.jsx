import './App.css'
import GoldNavbar from './components/Navbar'
import Hero from './components/Hero'
import ProductScroll from './components/ProductScroll'
import PromoCards from './components/PromoCards'
import StoreCard from './components/StoreCard'
import ShopCards from './components/ShopCards'
import Footer from './components/Footer'
import ProudSection from './components/ProudSection'
import SubscribeSection from './components/SubscribeSection'


function App() {
  

  return (
    <>
      <GoldNavbar />
      <Hero button1='Info' button2='New' />
      <Hero button1='Info' button2='New' />
      <Hero button1='Info' button2='New' />
      <ProductScroll />
      <ProudSection />
      <PromoCards />
      <StoreCard />
      <ShopCards />
      <SubscribeSection />
      <Footer />
    </>
  )
}

export default App

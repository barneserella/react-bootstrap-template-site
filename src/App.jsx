import './App.css'
import GoldNavbar from './components/Navbar'
import Hero from './components/Hero'
import ProductScroll from './components/ProductScroll'
import PromoCards from './components/PromoCards'
import StoreCard from './components/StoreCard'
import ShopCardSection from './components/ShopCardSection'
import Footer from './components/Footer'
import ProudSection from './components/ProudSection'
import SubscribeSection from './components/SubscribeSection'

const cardData = [
  {image:"/gold.jpeg" , buttonText: "Click1"},
  {image:"/gold.jpeg" , buttonText: "Click2"},
  {image:"/gold.jpeg" , buttonText: "Click3"},
  {image:"/gold.jpeg" , buttonText: "Click4"},
];

function App() {
  

  return (
    <>
      <GoldNavbar fixed="top" />
      <Hero button1='Info' button2='New' title='Spring Sale' />
      <Hero button1='Info' button2='New' title='Cash 4 Gold'/>
      <Hero button1='Info' button2='New' title='Discover Jewellery'/>
      <ProductScroll />
      <ProudSection />
      <PromoCards />
      <StoreCard />
      <ShopCardSection cards={cardData} />
      <SubscribeSection />
      <Footer />
    </>
  )
}

export default App

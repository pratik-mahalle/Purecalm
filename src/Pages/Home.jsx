import Navb from '../Componennts/Navbar/Navbar';
import MyFooter from '../Componennts/footer/Footer';
import Hero from '../Componennts/hero/hero';
import Choose from '../Componennts/choose/Choose';
import Therepies from '../Componennts/therepies/therepies';
import Testonomials from '../Componennts/Testonomials/Testimonials';
import About from '../Componennts/about/About';
import Chat from '../Componennts/chatbot/Chat';
import { Helmet,HelmetProvider } from 'react-helmet-async';



function Home(){

  return (
    <HelmetProvider>
    <Helmet>
        <title>Home</title>
        <meta name="description" content="This is the meta description for My Page." />
      </Helmet>
      
      <Navb />
      <div>
      <Hero />
      <Choose />
      <Therepies />
      <Testonomials />
      <About />
      </div>
      <MyFooter />
      <Chat />
    </HelmetProvider>
  );
}


export default Home;

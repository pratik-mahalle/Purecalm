
import Navb from "../Componennts/Navbar/Navbar"
import SpiritualCard from "../Componennts/Spiritual_card/SpiritualCard"
import MyFooter from "../Componennts/footer/Footer"
import Chat from '../Componennts/chatbot/Chat';
import { Helmet,HelmetProvider } from 'react-helmet-async';

function Spiritual() {
  return (
    <HelmetProvider>
    <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="This is the meta description for My Page." />
      </Helmet>
      
        <Navb />
        <SpiritualCard />
        <MyFooter />
        <Chat />
    </HelmetProvider>
  )
}

export default Spiritual
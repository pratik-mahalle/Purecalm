import Navb from '../Componennts/Navbar/Navbar'
import YogaCard from '../Componennts/Yoga_card/YogaCard'
import Chat from '../Componennts/chatbot/Chat';
import MyFooter from '../Componennts/footer/Footer';
import { Helmet,HelmetProvider } from 'react-helmet-async';

function Yoga() {
  return (
    <HelmetProvider >
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="This is the meta description for My Page." />
      </Helmet>
      
      <Navb />
      <YogaCard />
      <MyFooter />
      <Chat />
    </HelmetProvider>
  )
}

export default Yoga
import Navb from "../Componennts/Navbar/Navbar"
import MyFooter from "../Componennts/footer/Footer"
import Mantra from "../Componennts/mantra/Mantra"
import Chat from '../Componennts/chatbot/Chat';
import { Helmet,HelmetProvider } from 'react-helmet-async';


function Mantras() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="This is the meta description for My Page." />
      </Helmet>
      
        <Navb />
        <Mantra />
        <MyFooter />
        <Chat />
    </HelmetProvider>
  )
}

export default Mantras
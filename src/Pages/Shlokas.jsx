import Navb from "../Componennts/Navbar/Navbar"
import MyFooter from "../Componennts/footer/Footer"
import Shloka from "../Componennts/Shloka/Shloka"
import Chat from '../Componennts/chatbot/Chat';
import { Helmet,HelmetProvider } from 'react-helmet-async';

function Shlokas() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="This is the meta description for My Page." />
      </Helmet>
      
        <Navb />
        <Shloka />
        <MyFooter />
        <Chat />
    </HelmetProvider>
  )
}

export default Shlokas
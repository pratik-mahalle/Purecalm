import MusicCategory from "../Componennts/MusicCategory/MusicCategory"
import Navb from "../Componennts/Navbar/Navbar"
import MyFooter from "../Componennts/footer/Footer"
import Chat from '../Componennts/chatbot/Chat';
import { Helmet,HelmetProvider } from 'react-helmet-async';


function Music() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="This is the meta description for My Page." />
      </Helmet>
      
      <Navb />
      <MusicCategory />
      <MyFooter />
      <Chat />
    </HelmetProvider>
  )
}

export default Music
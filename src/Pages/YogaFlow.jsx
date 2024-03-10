import MusicInfo from "../Componennts/MusicInfo/MusicInfo"
import Navb from "../Componennts/Navbar/Navbar"
import MyFooter from "../Componennts/footer/Footer"
import Chat from '../Componennts/chatbot/Chat';
import { Helmet,HelmetProvider } from 'react-helmet-async';

const playlistSrc = "https://open.spotify.com/embed/playlist/3ukGFemus987uNCytI0wsD?utm_source=generator";


function YogaFlow() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="This is the meta description for My Page." />
      </Helmet>
      
      <Navb />
      <header className="mt-3">
        <h2>YogaFlow</h2>
      </header>
      <div className="mb-3">
      <MusicInfo playlistSrc={playlistSrc}/>
      </div>
      <MyFooter />
      <Chat />
    </HelmetProvider>
  )
}

export default YogaFlow
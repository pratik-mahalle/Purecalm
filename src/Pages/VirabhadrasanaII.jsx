
import Navb from "../Componennts/Navbar/Navbar"
import MyFooter from "../Componennts/footer/Footer"
import YogaInfo from "../Componennts/suryanamaskar/YogaInfo"
import Chat from '../Componennts/chatbot/Chat';
import { Helmet ,HelmetProvider} from 'react-helmet-async';

const yogaInfoData = [
  {
    id: 1,
    title: "Advantages",
    points:
      "Strength Building: Tones and strengthens the legs arms and core muscles.,Open Hips and Chest: Expands the chest and hip flexibility promoting a sense of openness."
  },
  {
    id: 2,
    title: "Do's",
    points:
      "Align Front Knee: Ensure the knee is directly above the ankle to prevent strain.,Extend Arms Mindfully: Reach arms actively maintaining shoulder awareness."
  },
  {
    id: 3,
    title: "Don'ts",
    points:
      "Avoid Overarching Back: Engage core to prevent excessive arching in the lower back., Avoid Tense Shoulders: Keep shoulders relaxed away from the ears."
  },
];

const imagesData = [
  "/Virabhadra/virbhadra-1.png",
  "/Virabhadra/virbhadra-2.png",
  "/Virabhadra/virbhadra-3.png",
];


function VirabhadrasanaII() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="This is the meta description for My Page." />
      </Helmet>
      
      <Navb />
      <header className="text-center mt-5 pt-5">
        <h1 style={{fontSize:'60px'}}>Warrior II (Virabhadrasana II)</h1>
      </header>
      <YogaInfo yogaInfo={yogaInfoData} images={imagesData} video="/virabhadra.mp4"/>
      <MyFooter />
      <Chat />
    </HelmetProvider>
  )
}

export default VirabhadrasanaII
import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import ImageViewer from './components/image_viewer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const url = "http://tianshan.ca/filesystem";
const name = "/Users/developer/T9/travels/processed/174-alison/jpeg/20251130_225239.jpeg";
const list = [
  "/Users/developer/T9/travels/processed/174-alison/jpeg/20251130_225239.jpeg",
  "/Users/developer/T9/travels/processed/174-alison/jpeg/20251202_080503.jpeg",
  "/Users/developer/T9/travels/processed/174-alison/jpeg/20251206_092438.jpeg",
  "/Users/developer/T9/travels/processed/174-alison/jpeg/20251207_121220.jpeg",
];
const onDelete = () => {
  console.log("onDelete-started");
}
const ImageContainer = () => {
  return (
    <div className='container'>
        <Header/>
        <ImageViewer
          url={url}
          name={name} 
          list={list} 
          onDelete={onDelete}
        />
        <Footer/>
    </div>
  )
}
const Home = () => {
  return (
    <div className='container'>
        <Header/>
        <div className='container'></div>
        <Footer/>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/image-viewer" element={<ImageContainer/>} />
      </Routes>
    </Router>
  )
}

export default App

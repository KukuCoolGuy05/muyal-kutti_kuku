import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';
import Timeline from './components/Timeline';
import Journals from './components/Jounrals';
import FunnyPhotos from './components/FunnyPhotos';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PhotoGallery />
      <Timeline />
      <Journals />
      <FunnyPhotos />
    </div>
  );
}

export default App;

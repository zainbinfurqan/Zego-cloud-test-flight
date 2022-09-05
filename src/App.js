import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginRegister from './Pages/Login-Register';
import Home from './Pages/Home';
import VideoCalling from './Pages/Video-Calling';
import AudioCalling from './Pages/Audio-Calling';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calling-video" element={<VideoCalling />} />
        <Route path="/calling-audio" element={<AudioCalling />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

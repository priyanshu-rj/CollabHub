import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Home';
import Roompage from './Pages/Room';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/room/:roomId" element={<Roompage />} />
    </Routes>
  );
}

export default App;

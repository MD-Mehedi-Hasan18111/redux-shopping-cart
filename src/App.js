import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ReviewItems from './components/ReviewItems/ReviewItems';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cartItems" element={<ReviewItems />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

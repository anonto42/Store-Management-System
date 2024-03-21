import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Home from './Pages/Home/Home';
import MyState from './Context/myState';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <MyState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tund' element />
        </Routes>
      </BrowserRouter>
    </MyState>
  )
}

export default App

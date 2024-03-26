import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Home from './Pages/Home/Home';
import MyState from './Context/myState';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCart from './Pages/Product/ProductCart';
import Layout from './Components/Layout/Layout';
import SignUp from './Pages/Ragister/SignUp';
import Login from './Pages/Ragister/Login';
import ForgotPassword from './Pages/Ragister/ForgotPassword';
import Accout from './Pages/account/Accout';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, ToastContainer } from 'react-toastify';

function App() {

  return (
    <MyState>
      <BrowserRouter>
        <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<ProductCart/>} />
              <Route path='/ragister' element={<SignUp/>} />
              <Route path='/login' element={<Login />} />
              <Route path='/forgot' element={<ForgotPassword/>} />
              <Route path='/account' element={<Accout/>} />
            </Routes>
        </Layout>
      </BrowserRouter>
      <ToastContainer />
    </MyState>
  )
}

export default App

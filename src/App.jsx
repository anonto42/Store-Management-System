import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Home from './Pages/Home/Home';
import MyState from './Context/myState';
import ProductCart from './Pages/Product/ProductCart';
import Layout from './Components/Layout/Layout';
import SignUp from './Pages/Ragister/SignUp';
import Login from './Pages/Ragister/Login';
import ForgotPassword from './Pages/Ragister/ForgotPassword';
import Accout from './Pages/account/Accout';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Admin from './Pages/Admin/Dashbord/Admin';
import Catagory from './Pages/Product/Catagory';
import MessageWithSeller from './Pages/message/MessageWithSeller';
import EditeProduct from './Pages/Product/EditeProduct';
import Cart_page from './Pages/Cart_Page/Cart_page';

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
              <Route path='/product/catagory/:id' element={<Catagory />} />
              <Route path= '/product/edit&addtocardorbuy/:id' element={<EditeProduct/>} />
              <Route path= '/cart' element={<Cart_page/>} />
              <Route path='/product/catagory/custom:product/:id' element={
                <ProtectedRoutes>
                  <MessageWithSeller/>
                </ProtectedRoutes>
              } />
              <Route path='/account' element={
                <ProtectedRoutes>
                  <Accout/>
                </ProtectedRoutes>
              } />
              <Route path='/dashbord' element={
                <ProtectedRoutesForAdmin>
                  <Admin/>
                </ProtectedRoutesForAdmin>
              } />
            </Routes>
        </Layout>
      </BrowserRouter>
      <ToastContainer />
    </MyState>
  )
}

export default App
// for users
export const ProtectedRoutes = ({children}) => {
  const user = localStorage.getItem('user');
  if(user){
    return children
  }else{
    return window.location.href='/login'; 
  }
}
// for admin
export const ProtectedRoutesForAdmin = ({children}) =>{
  const admin = JSON.parse(localStorage.getItem('user'));
  if(admin?.user?.email === 'anontom90@gmail.com'){
    return children;
  }else{
    return window.location.href = '/login'
  }
}
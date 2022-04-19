import logo from './logo.svg';
import './App.css';
import Header from './Componantes/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Componantes/Home/Home/Home';
import CheckOut from './Componantes/CheckOut/CheckOut';
import Blogs from './Componantes/Blogs/Blogs';
import AboutMe from './Componantes/AboutMe/AboutMe';
import Login from './Componantes/LogIn/Login/Login';
import SignUp from './Componantes/LogIn/SignUp/SignUp';
import NotFound from './Componantes/Shared/NotFound/NotFound';
import Footer from './Componantes/Shared/Footer/Footer';
import RequireAuth from './Componantes/Shared/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="checkout" element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        } />
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="aboutme" element={<AboutMe></AboutMe>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

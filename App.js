import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paris from './components/Paris';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import BlogPage from './components/BlogPage';
import {BrowserRouter,Routes,Route}from 'react-router-dom';
import Services from './components/Services';
import Packages from './components/Packages';

import Destination from './components/Destination';
import About_us from './components/About_us';
//import PackagesData from './components/PackagesData';
import Booking from './components/Booking';
import Flight from './components/Flight';
import Train from './components/Train';
import Payment from './components/Payment';

import TravelGuides from './components/TravelGuides';
import Contact from './components/Contact';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import ReservationDetails from './components/ReservationDetails'
import Tokyo from './components/Tokyo';
import NewYork from './components/NewYork';
import Greece from './components/Greece';
import Jordan from './components/Jordan';
import London from './components/London';
import Rome from './components/Rome';
import Australia from'./components/Australia';
import USA from'./components/USA';
import Testimonals from './components/Testimonals';
import Navbar from './components/Navbar';
function App()
{
  return(
<div>
  <div className="app">

  <BrowserRouter>
  <Routes>
    <Route path='/home'element={<Home/>}/>
    <Route path='/about_us'element={<About_us/>}/>
    <Route path='/services'element={<Services/>}/>
    <Route path='/packages'element={<Packages/>}/>
    <Route path='/navbar'element={<Navbar/>}/>
    <Route path='/register'element={<Register/>}/>
    <Route path='/blogpage'element={<BlogPage/>}/>
    <Route path='/paris'element={<Paris/>}/>
    <Route path='/login'element={<Login/>}/>
    <Route path='/destination'element={<Destination/>}/>
    <Route path='/travelguide'element={<TravelGuides/>}/>
    <Route path='/australia'element={<Australia/>}/>
    <Route path='/greece'element={<Greece/>}/>
    <Route path='/jordan'element={<Jordan/>}/>
    <Route path='/london'element={<London/>}/>
    <Route path='/newyork'element={<NewYork/>}/>
    <Route path='/rome'element={<Rome/>}/>
    <Route path='/tokyo'element={<Tokyo/>}/>
   <Route path='/usa'element={<USA/>}/>
    <Route path='/flight'element={<Flight/>}/>
    <Route path='/booking'element={<Booking/>}/>
    <Route path='/payment'element={<Payment/>}/>
    <Route path='/train'element={<Train/>}/>
    <Route path='/contact'element={<Contact/>}/>
    <Route path='/reservation'element={<Reservation/>}/>
    <Route path='/reservationdetails'element={<ReservationDetails/>}/>
    <Route path='/footer'element={<Footer/>}/>
    <Route path='/testimonals'element={<Testimonals/>}/>
    </Routes>
    </BrowserRouter>
    
    </div>
</div>
  );

}
export default App;
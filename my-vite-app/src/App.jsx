import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'; 
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Routes , Route} from 'react-router-dom';
import Home from './assets/Components/Home.jsx';
import Contact from './assets/Components/Contact.jsx';
import Photographer from './assets/Components/Photographer.jsx';
import Events from './assets/Components/Events.jsx';
import Navbar from './assets/Components/Navbar.jsx';


import Navser from './assets/Components/Navser.jsx';
import About from './assets/Components/About.jsx';

import Footer from './assets/Components/Footer.jsx';
import Venues1 from './assets/Components/Venues1.jsx';
import Bridalmakeup from './assets/Components/Bridalmakeup.jsx';
import Henaartist from './assets/Components/Henaartist.jsx';
import Catering from './assets/Components/Catering.jsx';
import Decor from './assets/Components/Decor.jsx';
import Cusview from './assets/Components/Cusview.jsx';
import Privacy from './assets/Components/Privacy.jsx';
import Carrental from './assets/Components/Carrental.jsx';
import Bridalwear from './assets/Components/Bridalwear.jsx';
import Packages from './assets/Components/Packages.jsx';
import Soundsys from './assets/Components/Soundsys.jsx';
import Light from './assets/Components/Light.jsx';
import Terms from './assets/Components/Terms.jsx';
import Scroll from './assets/Components/Scroll.jsx';
import Wedsta from './assets/Components/Wedsta.jsx';
import Formsubmit from './assets/Components/Formsubmit.jsx';
import Packcom from './assets/Components/Packcom.jsx';
import Revcom from './assets/Components/Revcom.jsx';
import Admlog from './assets/Components/Admlog.jsx';
function App(){

   return (
    <>

 

<Navbar home="Home"/>

<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />

  <Route path="/events" element={ <Events/> } />
  <Route path="/packcom" element={ <Packcom/> } />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/packages" element={<Packages/>}/>
  <Route path="/photographer" element={ <Photographer/> } />
  <Route path="Venues1/" element={ <Venues1/>  } />
  <Route path="/bridalmakeup" element={ <Bridalmakeup/> } />
  <Route path="/henaartist" element={ <Henaartist/> } />
  <Route path="/catering" element={ <Catering/> } />
  <Route path="/decor" element={ <Decor/> } />
 
  <Route path="/privacy" element={ <Privacy/> } />
  <Route path="/carrental" element={ <Carrental/> } />
  <Route path="/bridalwear" element={ <Bridalwear/> } />
  <Route path="/Light" element={ <Light/> } />
  <Route path="/Soundsys" element={  <Soundsys/> } />
  <Route path="/Wedsta" element={ <Wedsta/> } />
  <Route path="/Formsubmit" element={ <Formsubmit/> } />
   <Route path="/service" element={ <Navser/> } />
  <Route path="/terms" element={ <Terms/> } />
    <Route path="/revcom" element={ <Revcom/> } />
    <Route path="/admlog" element={ <Admlog/> } />
     <Route path="/cusview" element={ <Cusview/> } />
</Routes>
<Scroll/>
<Footer/>
 
    </> 

  )}
export default App

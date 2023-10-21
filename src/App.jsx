import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from './component/landingpage'
import MenuMinuman from './component/menu'
import Checkout from './component/checkout'
import MenuRecommendation from './component/aiRecomendasi';
import Recipe from './component/recipe';
import Admin from './component/admin';


  const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/menu" element={<MenuMinuman/>}/>
          <Route path="/checkout" element={<Checkout/>}/> 
          <Route path="/ai" element={<MenuRecommendation/>}/>
          <Route path="/recipe" element={<Recipe/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </Router>
    );
  }

export default App

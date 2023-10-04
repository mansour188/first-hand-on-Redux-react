
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Post from './Post';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <Navbar/>
   <Routes>
    
   <Route exact path="/" Component={Home}/>
   
      <Route path="/about" Component={About} />
         
    
      <Route path="/contact" Component={Contact} />
      <Route path="/:postId" Component={Post} />
         
     
   
   </Routes>
      
   
    </div>
    </BrowserRouter>
  );
}

export default App;

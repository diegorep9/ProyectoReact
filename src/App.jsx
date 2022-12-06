import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home"
import Favs from "./pages/Favs"
import Contact from "./pages/Contact"
import Detail from "./pages/Detail"


function App() {
  return (
      <div className="App">
          <Navbar/>

           <Routes>
            <Route path="/favs" element={<Favs/>}/>
          <Route path="/Contact" element={<Contact/>}/>

           <Route path="/" element={<Home/>}>
            <Route path="/datail:id" element={<Detail/>}/>
           </Route>

           </Routes>

          <Footer/>
      </div>
  );
}

export default App;


import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Myprovider } from './context/Mycontext';
import { Addproducts } from './pages/Addproducts';
import { Listproducts } from './pages/Listproducts';
import { Removeproducts } from './pages/Removeproducts';




function App() {
  return (
   <div >
     <Myprovider>
      <h1 className="heading">Product Store</h1>
     <header className="main">
    
<nav>
  <ul>
    <li>
      <Link to="/Addproduct">Add Products</Link>
    </li>
    <li>
      <Link to="/Removeproduct">Remove Products</Link>
    </li> 
     <li>
      <Link to="/Listproduct">List Products</Link>
    </li>
  </ul>
</nav>
</header>
<Routes>
  <Route path="Addproduct" element={<Addproducts/>}></Route>
  <Route path="Removeproduct" element={<Removeproducts/>}></Route>
  <Route path="Listproduct" element={<Listproducts/>}></Route>
</Routes>
</Myprovider>
   </div> 
  )
}

export default App;

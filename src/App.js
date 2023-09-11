import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import ToDo from "./components/SCREENS/ToDo";
import Contact from "./components/SCREENS/Contact";
import Section from "./components/SCREENS/Section";
import Nav from "./components/includes/nav";
import Nomatch from "./components/SCREENS/NoMatch";
import ProductsNav from "./components/includes/productsNav";
import Products from "./components/SCREENS/Products";
import Fashion from "./components/SCREENS/Fashion";
import Electronics from "./components/SCREENS/Electronics";
import Students from "./components/SCREENS/Students";
import Student from "./components/SCREENS/Student";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<ToDo />}/>
        <Route path="section" element={<Navigate replace to="/contact"/>}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="students" element={<Students />}/>
        <Route path="students/:name" element={<Student />}/>
        <Route path="products" element={<ProductsNav />}>
          <Route index element={<Products />}/>
          <Route path="all" element={<Products />}/>
          <Route path="fashion" element={<Fashion />}/>
          <Route path="electronics" element={<Electronics />}/>
        </Route>
        <Route path="*" element={<Nomatch />}/>
      </Routes>
    </Router>
  );
}

export default App;
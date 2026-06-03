import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter, useParams } from "react-router";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {

  function User(){
    console.log(useParams())
    const {id} = useParams();
    return <h2>User Profile ID: {id}</h2>
  }

  function NotFound(){
    return <h2>404 Not Found</h2>
  }

  return (
    <BrowserRouter>
    <h1>React Router Example</h1>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/about">About</Link> |
          <Link to="/contact">Contact</Link> |
          <Link to="/user/10">User</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
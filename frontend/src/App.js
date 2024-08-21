import DashBoard from "./components/dashboard";
import Signin from "./components/signin";
import Signup from "./components/signup";
import "./style.css"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
       <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="signin" element={<Signin/>}></Route>
        <Route path="dashboard" element={<DashBoard/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Table from "./Components/Table";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Components/Error";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Table/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="*"element={<Error/>}></Route>
        </Routes>
        {/* <Edit/> */}
        {/* <Table/> */}
        {/* <Create /> */}
        
      </Router>
    </>
  );
}

export default App;

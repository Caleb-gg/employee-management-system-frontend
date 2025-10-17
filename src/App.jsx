import './App.css'
import ListEmployee from "./Components/ListEmployee.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Employee from "./Components/Employee.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                {/* http://localhost:300 */}
                <Route path='/' element={<ListEmployee />}></Route>
                {/* http://localhost:300/employees */}
                <Route path='/employees' element={<ListEmployee />}></Route>
                {/* http://localhost:300/employees */}
                <Route path='/add-employee' element = { <Employee />}></Route>
                {/* http://localhost:300/edit-employee/id */}
                <Route path='/edit-employee/:id' element={<Employee />}></Route>

            </Routes>
            <Footer />
        </BrowserRouter>
    </>
  )
}

export default App

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Navbar from './component/navbar';
import Adminscreen from './screens/admin';
import Employeelist from './screens/employeelist';
import Addemployee from './screens/addemployee';
import Sales from './screens/sales';
import Projects from './screens/project';
import Editemployee from './screens/editemployee';
import Registerscreen from './screens/register';
import Loginscreen from './screens/login';
import Addproject from './screens/addProject';
import Editproject from './screens/editProject';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Loginscreen/>} />
        <Route path='/' element={<Registerscreen />}/>
        <Route path='/admin' element={<Adminscreen />}>
          <Route path='/admin/employeelist' element={<Employeelist/>} />
          <Route path='/admin/addemployee' element={<Addemployee/>} />
          <Route path='/admin/editemployee/:employeeid' element={<Editemployee />} />
          <Route path='/admin/addproject' element={<Addproject/>} />
          <Route path='/admin/projectlist' element={<Projects/>} />
          <Route path='/admin/editproject/:projectid' element={<Editproject />} />
          <Route path='/admin/sales' element={<Sales/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

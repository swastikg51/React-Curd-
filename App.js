import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';


function App() {
  return (
      <>

         <Router>

        <Header/>

        <Routes>

  
          <Route path='/' element={<Home/>} />
         <Route path='/adduser' element={<AddUser />} />
          <Route path='/edituser/:id' element={<EditUser/>} />

          <Route path='*' element={<Home />} /> 


        </Routes>



      </Router>

      </>
  );
}

export default App;

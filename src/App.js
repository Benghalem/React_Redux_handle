import './App.css';
import { Login } from './components/Login';
import { Register} from './components/Register';
import { Header } from './components/Header';
import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    <BrowserRouter>   
      <Header />
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
  
    
    </BrowserRouter>
 

    /* <div className='App'>
      <h1>Hello Redux Basic</h1>
      <div className='counter'>Counter: 0</div>;
      <div>
        <button className='btn'>increase +</button>
        <button className='btn'>decrease -</button>
      </div>
      <div>
        <button className='btn'>Hide/Show Counter Number</button>
      </div>
    </div> */
  );
}

export default App;

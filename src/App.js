import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom'

import Routes from './pages/Routes';


function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
      <Routes />
      </BrowserRouter>
      
    </>
  );
}

export default App;

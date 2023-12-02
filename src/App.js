import logo from './logo.svg';
import './App.css';
import HomeContainer from './HomeContainer/home_container';
import './firebase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <HomeContainer />

      <ToastContainer/>
    </div>
  );
}

export default App;

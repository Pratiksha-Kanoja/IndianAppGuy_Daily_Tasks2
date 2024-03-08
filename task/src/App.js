import logo from './logo.svg';
import './App.css';
// import PresentationComponent from './Images6/Mainpage';
import { Route,Routes } from 'react-router-dom';
import PresentationComponent from './Quizslides/Mainpage';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<PresentationComponent/>} /> */}
        <Route path='/' element={<PresentationComponent/>} /> 
      </Routes>
    </div>
  );
}

export default App;

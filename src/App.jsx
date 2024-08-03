import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import LogSig from './components/LogSig';
import Routing from './Routing';

function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route exact path='/' element={<Routing/>}/>
                <Route exact path='/tologin' element={<LogSig/>}/>
            </Routes>
        </Router>
     
    </>
  )
}

export default App

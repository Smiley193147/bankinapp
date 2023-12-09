
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import FundTransfer from './components/FundTransfer';
import ViewStatement from './components/ViewStatement';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='' element={<Login />} />
          <Route path='/Dashboard' element=<Dashboard /> />
          <Route path='/FundTransfer' element=<FundTransfer /> />
          <Route path='/ViewStatement' element=<ViewStatement /> />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

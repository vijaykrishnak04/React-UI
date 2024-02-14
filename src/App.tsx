import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import MembershipPage from './views/MembershipPage';

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/membership' element={<MembershipPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App

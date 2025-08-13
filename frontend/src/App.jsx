import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signup from './components/SignupIn/Signup';
import Login from './components/login/Login';
import NoAccess from './components/noAccess/NoAccess';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorizedAccess" element={<NoAccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

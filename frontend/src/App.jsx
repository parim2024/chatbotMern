/*import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
*/
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Home from './components/home/Home';
import Signup from './components/SignupIn/Signup';
import Login from './components/login/Login';
import NoAccess from './components/noAccess/NoAccess';
import MoodTrack from './components/moodtrack/MoodTrack.jsx';
import AnonymousSharing from './components/anonymous/AnonymousSharing';
import AnonymousPost from './components/anonymous/AnonymousPost';
import AllAnonymousPost from './components/anonymous/AllAnonymousPost';
import Therapist from './components/AITherapist/Therapist.jsx';
import OnlineTherapists from './components/OnlineTherapists/OnlineTherapists.jsx';
import AboutUs from './components/aboutUs/AboutUs';
import Profile from './components/profile/Profile';  // ✅ Un-comment this

const PrivateRoute = ({ children }) => {
  const { username: usernameFromUrl } = useParams();
  const token = localStorage.getItem('token');
  const usernameFromStorage = localStorage.getItem('tokenUser');

  if (!token || usernameFromUrl !== usernameFromStorage) {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenUser');
    return <Navigate to="/unauthorizedAccess" />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorizedAccess" element={<NoAccess />} />
        <Route path="/online-therapists" element={<OnlineTherapists />} />
        <Route path="/aboutus" element={<AboutUs />} />

        {/* Private Routes */}
        <Route path="/:username/mood" element={<PrivateRoute><MoodTrack /></PrivateRoute>} />
        <Route path="/:username/anonymoussharing" element={<PrivateRoute><AnonymousSharing /></PrivateRoute>} />
        <Route path="/:username/createanonymouspost" element={<PrivateRoute><AnonymousPost /></PrivateRoute>} />
        <Route path="/:username/allanonymousposts" element={<PrivateRoute><AllAnonymousPost /></PrivateRoute>} />
        <Route path="/:username/therapist" element={<PrivateRoute><Therapist /></PrivateRoute>} />
        <Route path="/:username/profile" element={<PrivateRoute><Profile /></PrivateRoute>} /> {/* ✅ Profile added */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

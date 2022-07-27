import { BrowserRouter as Router, Routes, Route, Link, Redirect, Navigate } from "react-router-dom"
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage.jsx'
import ProfilePage from './pages/profile/ProfilePage.jsx'
import TaskPage from "./pages/tasks/TaskPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";

const AppRoutingOne = () => {


  const logged = false

  return (
    <>
      <Router>
        <div>
          <aside>
            <Link to='/'>|| HOME |</Link>
            <Link to='/about'>| ABOUT |</Link>
            <Link to='/faqs'>| FAQS |</Link>
            <Link to='/any404'>| Not existing route ||</Link>
          </aside>

          <main>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={logged ?  <Navigate to='/' /> : <LoginPage />} />

              <Route path='/about' element={<AboutPage />} />
              <Route path='/faqs' element={<AboutPage />} />
              <Route path='/profile' element={logged ? <ProfilePage /> : <Navigate to='/login' />} />
              <Route path='tasks' element={<TaskPage />} />
              <Route path='task/:id' element={<TaskDetailPage />} />

              <Route path='/*' element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default AppRoutingOne;

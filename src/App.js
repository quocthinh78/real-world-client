import Home from "./pages/home/Home"
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  Redirect
} from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "./context/authContext"
function App() {
  const {user} = useContext(AuthContext)
  console.log("🚀 ~ file: App.js ~ line 16 ~ App ~ user", user)
    return (
    <Router>
        <Switch>
          <Route exact path="/">
           {user ?  <Home /> : <Register />}
          </Route>
          <Route path="/profile/:username">
            <Profile />
          </Route>
          <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/register">
            {user? <Redirect to="/" /> : <Register />}
          </Route>
        </Switch>
    </Router>
    )
  }
  
  export default App;
import Topbar from "./components/topbar/Topbar";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Write from "./Pages/write/Write";
import Settings from "./Pages/settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/register/Register";
import Single from "./Pages/single/Single";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Topbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

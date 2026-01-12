import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserChat from "./pages/UserChat";
import AdminDashboard from "./pages/AdminDashboard";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");
  const role = localStorage.getItem("role");

  if (!role) {
    return page === "login" ? (
      <Login goRegister={() => setPage("register")} />
    ) : (
      <Register />
    );
  }

  if (role === "admin") return <AdminDashboard />;
  return <UserChat />;
}

export default App;

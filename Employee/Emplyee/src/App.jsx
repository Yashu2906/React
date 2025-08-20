import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider";
import PrivateRoute from "./components/others/PrivateRoute";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("LoggedInUser");
      if (loggedInUser) {
        try {
          const parsed = JSON.parse(loggedInUser);
          setUser(parsed.role);
          if (parsed.role === "Employee" && parsed.data) {
            setLoggedInUserData(parsed.data);
          }
        } catch (e) {
          setUser(null);
        }
      }
      setLoading(false);
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "123") {
      setUser("Admin");
      localStorage.setItem("LoggedInUser", JSON.stringify({ role: "Admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("Employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "LoggedInUser",
          JSON.stringify({ role: "Employee", data: employee })
        );
      } else {
        alert("Invalid Credential");
      }
    } else {
      alert("Invalid Credential");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            !user ? (
              <Login handleLogin={handleLogin} />
            ) : user === "Admin" ? (
              <Navigate to="/admin" replace />
            ) : (
              <Navigate to="/employee" replace />
            )
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute user={user === "Admin"}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/employee"
          element={
            <PrivateRoute user={user === "Employee"}>
              <EmployeeDashboard data={loggedInUserData} />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <Navigate
              to={user ? (user === "Admin" ? "/admin" : "/employee") : "/login"}
              replace
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

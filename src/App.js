import React, { useEffect } from "react";
import Header from "./Components/Navbar";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./Components/firebase";
import { useStateValue } from "./stateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {

      // Check if authUser is not null or undefined before accessing its properties and console.log it
      if (authUser) {
        console.log("The user logged in:", authUser.email);
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        console.log("The user logged out:");
        dispatch({
          
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          />
          <Route
            path="/payment"
            element={
              <div>
                <Header />
                <Payment />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

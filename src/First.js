import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationLink from "./Components/NavigationLink";
import RoutesPage from "./Components/Routes";
export default function FirstPage() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar-container">
          <h1>Dashboard</h1>

          <NavigationLink />
        </div>
        <div className="content-container">
          <RoutesPage />
        </div>
      </div>
    </Router>
  );
}

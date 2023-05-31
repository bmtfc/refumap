import React, { useState } from "react";
import "./App.css";
import Map from "./components/Map";
import Filters from "./components/Filters";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="App">
      {sidebarOpen && <Sidebar />}
      <Map setSidebarOpen={setSidebarOpen} />
      <Filters />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import Map from "./components/Map";
import Filters from "./components/Filters";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [category, setCategory] = useState("all");
  const [allMarkers, setAllMarkers] = useState([]);
  const [selectedMarkers, setSelectedMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    const markers = [
      {
        id: 1,
        lat: 48.245234,
        lng: 49.135124,
        category: "education",
      },
      {
        id: 2,
        lat: 68.70368,
        lng: 37.59317,
        category: "foodAid",
      },
      {
        id: 3,
        lat: 63.75514,
        lng: -116.09413,
        category: "governmentBodies",
      },
      {
        id: 4,
        lat: -72.57034,
        lng: 179.6622,
        category: "integrationSupportOrganizations",
      },
      {
        id: 5,
        lat: -57.35105,
        lng: 138.86752,
        category: "legalServices",
      },
      {
        id: 6,
        lat: -41.09885,
        lng: 123.91321,
        category: "leisure",
      },
      {
        id: 7,
        lat: -24.45655,
        lng: -76.46459,
        category: "medicalAssistance",
      },
      {
        id: 8,
        lat: -0.54072,
        lng: -177.10664,
        category: "oralWrittenTranslation",
      },
      {
        id: 9,
        lat: 13.23647,
        lng: -8.42317,
        category: "psychologicalAssistance",
      },
      {
        id: 10,
        lat: -65.94051,
        lng: -21.92358,
        category: "transportation",
      },
      {
        id: 11,
        lat: 23.24188,
        lng: -28.81184,
        category: "volunteering",
      },
      {
        id: 12,
        lat: 8.33392,
        lng: 110.80127,
        category: "other",
      },
    ];

    setAllMarkers(markers);
    setSelectedMarkers(markers);
  }, []);

  useEffect(() => {
    if (category === "all") {
      setSelectedMarkers(allMarkers);
      return;
    }
    const filteredMarkers = allMarkers.filter(
      ({ marker }) => marker.category === category
    );
    setSelectedMarkers(filteredMarkers);
  }, [category]);

  return (
    <div className="App">
      {sidebarOpen && <Sidebar {...selectedMarker} />}
      <Map
        setSidebarOpen={setSidebarOpen}
        selectedMarkers={selectedMarkers}
        setSelectedMarker={setSelectedMarker}
        selectedMarker={selectedMarker}
      />
      <Filters setCategory={setCategory} category={category} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Start from "./components/Start";
import Source from "./components/Source";
import ShutDown from "./components/ShutDown";
import backgroundImageA from "./assets/1920x1200-4a.jpg";
import backgroundImageB from "./assets/1920x1200-4b.jpg";
import Navbar from "./components/NavBar";

function App() {
  const [page, setPage] = useState("start");
  const [background, setBackground] = useState(backgroundImageA);

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
    // Set background based on page
    setBackground(getBackgroundImage(newPage));
  };

  // Function to get background image based on page
  const getBackgroundImage = (page) => {
    switch (page) {
      case "start":
        return backgroundImageA;
      case "source":
        return backgroundImageB;
      case "shutdown":
        return backgroundImageA;
      default:
        return backgroundImageA; // Default background
    }
  };

  const styles = {
    container: {
      backgroundImage: `url(${background})`,
      width: "100%",
      height: "100vh",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat", // Prevent background image from repeating
      backgroundPosition: "center", // Center the background image
      overflow: "hidden", // Hide overflowing content
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
    },
  };

  return (
    <>
    <Navbar></Navbar> 

      <div style={styles.container}>
        {page === "start" ? (
          <Start
            page={page}
            setPage={handlePageChange}
          />
        ) : page === "source" ? (
          <Source
            page={page}
            setPage={handlePageChange}
          />
        ) : (
          <ShutDown
            page={page}
            setPage={handlePageChange}
          />
        )}
      
      </div>
    </>
  );
}

export default App;



  
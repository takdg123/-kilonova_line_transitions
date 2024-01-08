import React from 'react';
import NavBar from './navigate';
import Footer from './footer'

function MapPage() {
  return (
    <div>
      <NavBar value="2" />
      <div style={{ marginRight: "30px", marginLeft: "30px", display: "flex", justifyContent: "center" }}>
        <img style={{ display: "block" }} src="/figures/SRI_map.png" alt="Resonance map" />
      </div>
      <Footer/>
    </div>
  );
}

export default MapPage;
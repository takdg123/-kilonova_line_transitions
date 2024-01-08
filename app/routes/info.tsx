import React from 'react';
import NavBar from './navigate';
import Footer from './footer'

function InfoPage() {
  return (
    <div>
      <NavBar value="2" />
      <div style={{ marginRight: "30px", marginLeft: "30px" }}>
        Atomic data
      </div>
      <Footer/>
    </div>
  );
}

export default InfoPage;
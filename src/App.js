import * as React from "react";

import "./App.css";
import SEOanalysis from "./Components/SEO-Analysis/SEOanalysis";
import WhatWeOffer from "./Components/WhatWeOffer/WhatWeOffer";
import WhyChooseUs from "./Components/Why-choose-us/WhyChooseUs";

function App() {
  return (
    <div>
      <WhyChooseUs></WhyChooseUs>
      <div style={{ marginTop: "7rem" }}></div>
      <SEOanalysis></SEOanalysis>
      <div style={{ marginTop: "7rem" }}></div>
      <WhatWeOffer></WhatWeOffer>
    </div>
  );
}

export default App;

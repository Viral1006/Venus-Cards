// import React from 'react';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Navbar from './components/Navbar'; // Importing the Navbar component
// import HomePage from './components/HomePage';
// import Carousel from './components/Carousel';
// import Footer from './components/Footer';
// import AboutUs from './components/AboutUs';

// const App = () => {

//   return (
//   <Router>
//     <div className="flex flex-col h-screen ">
//       <Navbar /> {/* Using the Navbar component */}
//       <Routes>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/about" component={AboutUs} />
//       </Routes>
//       <AboutUs />
//       <HomePage />
//       <Carousel  />
//       <Footer />
//       {/* <Carousel images={images} /> */}
//       {/* Your other content goes here */}
//     </div>
//   </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HomePage from './components/HomePage';
// import Carousel from './components/Carousel';
// import Footer from './components/Footer';
// import AboutUs from './components/AboutUs';

// const App = () => {
//   return (
//     <Router>
//       <div className="flex flex-col h-screen">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/aboutus" element={<AboutUs />} />
//           <Route path="/" element={<Carousel />} />
//         </Routes>
//         {/* <Carousel /> */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import CarouselIntegrate from './components/CarouselIntegrate';

const App = () => {
  return (
    // <Router> {/* Single Router component at the top */}
      <div className="flex flex-col h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          {/* Place Carousel within Routes */}
        </Routes>
        <Routes>
        <Route path="/" element={<CarouselIntegrate />} /> 
        </Routes>
        <Footer />
      </div>
    // </Router>
  );
};

export default App;

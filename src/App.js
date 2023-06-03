
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VilleTable from "./components/VilleTable";
import Ville from "./components/Ville";
import ZoneTable from "./components/ZoneTable";
import Zone from "./components/Zone";
import { Header, Footer } from "./components/Layout";
import ZoneByVille from "./components/ZoneByVille";
import RestaurantTable from "./components/RestaurantTable";
import SpecialiteTable from "./components/SpecialiteTable";
import SerieTable from "./components/SerieTable";
import Serie from "./components/Serie";
import Specialite from "./components/Specialite";
import Restaurant from "./components/Restaurant";
import GoogleMapComponent from "./components/map"

function App() {
    return (
      <Router>
        <Header />
        <div className="main-wrapper">
          <Routes>
            <Route path="/" element={<VilleTable />} />
            <Route path="/ajouter-ville" element={<Ville/>} />
            <Route path="/zone" element={<ZoneTable/>} />
            <Route path="/ajouter-zone" element={<Zone />} />
            <Route path="/zoneByVille" element={<ZoneByVille />} />
            <Route path="/restaurant" element={<RestaurantTable/>} />
            <Route path="/serie" element={<SerieTable/>}/>
             <Route path="/specialite" element={<SpecialiteTable/>}/>
             <Route path="/ajouter-serie" element={<Serie/>} />
             <Route path="/ajouter-specialite" element={<Specialite/>} />
             <Route path="/ajouter-restaurant" element={<Restaurant/>} />
             <Route path="/mapresto/:id" element={<GoogleMapComponent />} />

          
          </Routes>
        </div>
        <Footer />
      </Router>
    );
  }
  
  export default App;
  
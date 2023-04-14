import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AsideLeft from "./components/AsideLeft";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "./components/Player";


function App() {
  return (
    <BrowserRouter>
      <AsideLeft />
      < Player />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* {/<Route path="/:company" element={<CompanySearchResults />}  */}
        {/* <Route path="/favourites" element={<Favourites />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

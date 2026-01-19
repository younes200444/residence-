import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalDataProvider } from "./context/GlobalDataContext";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import CreateComptePage from "./pages/CreateComptePage";
import ChambreView from "./componenet/ChambreView";
import ChambrePage from "./pages/ChambrePage";
import Layout from "./Layout";


function App() {
  return (

    <GlobalDataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<CreateComptePage />} />
            <Route element={<Layout/>}>
          <Route path="/nos-chambre" element={<ChambrePage />} />
            </Route>
        </Routes>
      </Router>
    </GlobalDataProvider>
  );
}

export default App;

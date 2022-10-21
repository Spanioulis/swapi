import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { StarshipsList } from './components/StarshipsList';
import { Starship } from './components/Starship';
//! Sin uso de momento...
// import { LandingPage } from './components/LandingPage';
import './App.css';
import { Navbar } from './components/Navbar';

function App() {
    return (
        <BrowserRouter className="app">
            <Navbar />
            <Routes>
                <Route path="/starships" element={<StarshipsList />} />
                <Route path="/starships/:id" element={<Starship />} />
                <Route path="/home" element={<Home />} />
                {/* <Route index element={<LandingPage />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { StarshipsList } from './components/StarshipsList';
import { Starship } from './components/Starship';
import './App.css';
import { Navbar } from './components/Navbar';

function App() {
    return (
        <BrowserRouter className="app">
            <Navbar />
            <Routes>
                <Route path="/starships" element={<StarshipsList />} />
                <Route path="/starships/:id" element={<Starship />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

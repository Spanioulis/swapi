import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StarshipsList } from './components/StarshipsList';
import './App.css';
import { Navbar } from './components/Navbar';

function App() {
    return (
        <BrowserRouter className="app">
            <Navbar />
            <Routes>
                <Route path="/starships" element={<StarshipsList />} />
                <Route path="/" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

// import { LandingPage } from './components/LandingPage';
//! Sin uso de momento...
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Starship } from './components/Starship';
import { StarshipsList } from './components/StarshipsList';
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn';

function App() {
    return (
        <BrowserRouter className="app">
            <Navbar />
            <Routes>
                <Route path="/starships" element={<StarshipsList />} />
                <Route path="/starships/:id" element={<Starship />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/" element={<Home />} />
                {/* <Route index element={<LandingPage />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;

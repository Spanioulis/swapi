import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
// import logo from './assets/images/star-wars-logo.png';

function App() {
    const API_URL = 'https://swapi.dev/api/starships/';
    const [starships, setStarships] = useState([]);
    console.log(starships);

    useEffect(() => {
        // Llamar a la API
        axios(API_URL)
            // Obtener datos
            .then(({ data }) => {
                console.log(data.results);
                setStarships(data.results);
            });
    }, []);
    return (
        <div className="App">
            <header>
                <div className="logo">
                    {/* <img src={logo} alt="Logo Star Wars" /> */}
                    <h1>Star Wars</h1>
                    <div className="sign">
                        <p>LOGIN</p>
                        <p>SIGN IN</p>
                    </div>
                </div>
            </header>
            <main>
                <div className="starships-container">
                    {starships.map((starship) => {
                        return (
                            <div key={starship.model} className="starship">
                                <h3>{starship.name.toUpperCase()}</h3>
                                <p>{starship.model}</p>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}

export default App;

import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Starship } from './components/Starship';
import { StarshipsList } from './components/StarshipsList';
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn';
import { ProtectedRoute } from './components/ProtectedRoute';
import './App.css';

function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('Logged')) || null);
    const [userList, setUserList] = useState(JSON.parse(localStorage.getItem('Users')) || []);
    const [validate, setValidate] = useState(false);

    return (
        <BrowserRouter className="app">
            <Navbar validate={validate} setValidate={setValidate} />
            <Routes>
                <Route
                    path="/starships"
                    element={
                        <ProtectedRoute validate={validate}>
                            <StarshipsList />
                        </ProtectedRoute>
                    }
                />
                <Route path="/starships/:id" element={<Starship />} />
                <Route
                    path="/signup"
                    element={<SignUp userList={userList} setUserList={setUserList} />}
                />
                <Route
                    path="/login"
                    element={
                        <LogIn
                            user={user}
                            setUser={setUser}
                            userList={userList}
                            validate={validate}
                            setValidate={setValidate}
                        />
                    }
                />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

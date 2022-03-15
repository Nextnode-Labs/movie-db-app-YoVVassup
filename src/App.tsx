import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Login from './components/Login'
import UserProvider from './context';

import {GlobalStyle} from "./GlobalStyle";
import 'primereact/resources/themes/nova-alt/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const App: React.FC = () => (
    <Router>
        <UserProvider>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/:movieId' element={<Movie/>}/>
                <Route path='/*' element={<NotFound/>}/>
            </Routes>
            <GlobalStyle/>
        </UserProvider>
    </Router>
);

export default App;

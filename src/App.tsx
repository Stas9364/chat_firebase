import React from 'react';
import './App.css';
import {NavBar} from './common/components/NavBar/NavBar';
import {RoutesComponent} from './common/components/routes/Routes';


function App() {

    return (
        <div className="App">
            <NavBar/>
            <RoutesComponent/>
        </div>
    );
}

export default App;

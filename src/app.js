import React from 'react';
import "./styles/app.scss"
import Toolbar from "./components/Toolbar/Toolbar";
import SettingBar from "./components/SettingBar/SettingBar";
import Canvas from "./components/Canvas/Canvas";

function App() {
    return (
        <div className="app">
            <Toolbar/>
            <SettingBar/>
            <Canvas/>
        </div>
    );
}

export default App;
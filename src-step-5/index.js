import React from 'react';
import ReactDOM from 'react-dom';
import {Keyboard} from './components/Keyboard';

import './styles.css';

function App() {
    return (
        <div className="App">
            <Keyboard />
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import FirstApp from './FirstApp';
import CounterApp from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title="Titulo" /> */}
        <CounterApp value={20} />
    </React.StrictMode>
);
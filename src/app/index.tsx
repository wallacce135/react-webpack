import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';

import './styles/grid.css'
import './styles/index.css';
import './styles/utils.css';
import './styles/reset.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
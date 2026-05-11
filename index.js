import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import App from "./componants/App";



const myelement = (
    <div>
        <h1 id="heading">Recepies</h1>
        <App/>
    </div>
)




const root = createRoot(document.getElementById('root'));
root.render(myelement);


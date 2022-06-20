
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'

import App from './App'
import Table from './Table'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <div className='container'>
      <Table />
    </div>
  </StrictMode>
);
import 'react-devtools';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'

import App from './Api'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
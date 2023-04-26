import React from "react";
import ReactDOM from "react-dom";
import {ContextProvider} from './contexts/ContextProvider'
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import TrackDetails from "./pages/TrackDetails";

ReactDOM.render(
<ContextProvider>
<App />
</ContextProvider>

, document.getElementById('root'));

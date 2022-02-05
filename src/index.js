import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CollectionExample from './pages/CollectionExample';
import Liquifiy from './pages/Liquifiy';
import Navbar from './components/Navbar';
// import { Web3Auth } from "@web3auth/web3auth";
// import { CHAIN_NAMESPACES } from "@web3auth/base";




ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    {/* <App /> */}
    <Liquifiy />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

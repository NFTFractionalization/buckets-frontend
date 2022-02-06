import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CollectionExample from './pages/CollectionExample';
import Liquifiy from './pages/Liquifiy';
import Navbar from './components/Navbar';
import Feed from './pages/Feed.js';
import Login from './components/Login.js';
import { bucketList } from './data/BucketExamples';
// import { MoralisProvider } from "react-moralis";
import BucketsPage from "./pages/BucketsPage";
import bucketPageData from "./data/bucketPage";
import YourAssets from "./pages/YourAssets";
import Wrapper from "./Wrapper";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="1sNeRHQBsq5ZihAYmV3tcEVlWqoNe3aQMfR0EwxK" serverUrl="https://dknqzlqdlam7.usemoralis.com:2053/server">

    {/* ALLOWS REACT-MORALIS TO BE USED INSIDE ANY COMPONENT */}
    <Wrapper/>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

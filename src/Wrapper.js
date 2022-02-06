import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CollectionExample from './pages/CollectionExample';
import Liquifiy from './pages/Liquifiy';
import Navbar from './components/Navbar';
import Feed from './pages/Feed.js';

import { bucketList } from './data/BucketExamples';

import BucketsPage from "./pages/BucketsPage";
import bucketPageData from "./data/bucketPage";
import YourAssets from "./pages/YourAssets";
import {useState} from 'react';
import { useWeb3Transfer, useMoralis} from 'react-moralis';
function Wrapper(){
  const { logout, isAuthenticating } = useMoralis();
  const { authenticate, isAuthenticated, user } = useMoralis();
  return (
    <div>

      <Navbar  authenticate={authenticate} logout={logout}/>
      <BrowserRouter>
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={<App />} />

          {/* FEED AND NFT OVERVIEW PAGE */}
          <Route path="feed" element={<Feed />} />

          {/* CREATING NEW FRACTIONALIZED */}
          <Route path="new" element={<Liquifiy />} />

          {/* COLLECTION OVERVIEW AND STATS */}
          <Route path="collection" element={<CollectionExample {...bucketList[0]} />} />

          {/* USER ASSETS */}
          <Route path="/user" element={<YourAssets />} />

          {/* Buckets Page */}
          <Route path="buckets" element={<BucketsPage{...bucketPageData} />} />

        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default Wrapper
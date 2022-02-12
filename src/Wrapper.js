import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CollectionExample from './pages/CollectionExample';
import Liquifiy from './pages/Liquifiy';
import Navbar from './components/Navbar';
import Feed from './pages/Feed.js';
import TestApi from './pages/TestApi';
import { bucketList } from './data/BucketExamples';

import BucketsPage from "./pages/BucketsPage";
import bucketPageData from "./data/bucketPage";
import {useState} from 'react';
import { useMoralis} from 'react-moralis';
function Wrapper(){
  const { logout, isAuthenticating } = useMoralis();
  const { authenticate, isAuthenticated, user, isInitialized } = useMoralis();
  const [ userNfts,setUserNFTs] = useState([]);
  const [ userAddr,setUserAddr] = useState("");
  

  return (
    <div className="p-3  bg-black">

      <Navbar  authenticate={authenticate} logout={logout} user={user} isAuthenticated={isAuthenticated}/>
      <BrowserRouter>
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={<App />} />

          {/* FEED AND NFT OVERVIEW PAGE */}
          <Route path="feed" element={<Feed />} />

          {/* CREATING NEW FRACTIONALIZED */}
          <Route path="new" element={<Liquifiy  userAddr={userAddr} authenticate={authenticate} setUserAddr={setUserAddr} userNFTs={userNfts} setUserNFTs={setUserNFTs} isAuthenticated={isAuthenticated} isInitialized={isInitialized} user={user}/> } />

          {/* COLLECTION OVERVIEW AND STATS */}
          <Route path="collection" element={<CollectionExample {...bucketList[0]} />} />

          {/* USER ASSETS */}
          {/* <Route path="/user" element={<YourAssets />} /> */}

          {/* Buckets Page */}
          <Route path="buckets" element={<BucketsPage{...bucketPageData} />} />

          {/* TEST API for moralis */}
          <Route path="testApi" element={<TestApi />} />

        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default Wrapper
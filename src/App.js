import React from "react";
import logo from './logo.svg';
import './App.css';
import BucketView from './components/BucketView';
import OutlinedButton from './components/OutlinedButton';
import ConnectBanner from './components/ConnectBanner';

function App() {
  return (
    <div className="">
      <div className=" bg-black pt-10 text-center">
        <h1 className="text-white  text-5xl p-1">
          Its that degen tinder gambling shit<p className="text-transparent bg-clip-text bg-gradient-to-br from-[#CE4DA4] to-[#7353E5]"> For the modern APE</p>
        </h1>
        <h3 className="text-white p-6 m-5 opacity-70">Redefining NFT Liquidity, through partial ownership, valued off public sentiment. shorting or going long on an NFT is now as easy as swiping on tinder </h3>
        <button className=" rounded-3xl bg-gradient-to-r p-[3px] from-[#7928ca] to-[#ff0080]">
          <div className="flex flex-col justify-between  bg-black rounded-3xl hover:bg-gradient-to-r p-[3px] from-[#7928ca] to-[#ff0080]">
            <div className="text-white decoration-4 text-light flex justify-between m-2 pl-3 pr-3">
              Browse Buckets
            </div>
          </div>
        </button>
        
        <button className="bg-gray-700 text-white rounded-3xl m-2 p-3">
          <div className="pl-3 pr-3">LIQ your NFT</div>
        </button>
        <h1 className="text-5xl pt-5 pb-3 text-white">Current Buckets</h1>
        <BucketView />
        <OutlinedButton text="Browse All"/>
      <div className=" pt-6 flex flex-wrap justify-center text-white">
        <h2> </h2>
        
      </div>
      <div className="m-5 p-10">
      <ConnectBanner/>  
      </div>
      </div>
    </div>
  );
}

export default App;

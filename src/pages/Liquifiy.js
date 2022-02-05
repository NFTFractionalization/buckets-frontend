import React from 'react';
import {useState} from 'react';
import Navbar from "../components/Navbar"
import YourNFTs from "../components/YourNFTs"
import OutlinedButton from '../components/OutlinedButton';
import userData from '../data/userWallet';
import SetupTokens from '../components/SetupTokens.js'
// load json from userWallet.json into object
import { useMoralis } from "react-moralis";
import { useNFTBalances } from "react-moralis";


const NFTBalances = () => {
    const { getNFTBalances, data, error, isLoading, isFetching } = useNFTBalances();
  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button onClick={() => getNFTBalances({params:{chain:"matic"}})}>Refetch NFTBalances</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      
    </div>
  );
};


function Liquifiy(props) {
    const { authenticate, isAuthenticated, user } = useMoralis();
    
    return (
        <div className=" bg-bg0 flex content-center bg-auto">
            <div className=" p-3 ">
                <div className=" text-white text-center ">
                    <h1 className="text-3xl"> Liquifiy your nft </h1>
                    <div  className="grid grid-cols-3 gap-3">
                        {/* Deposit nft section */}
                        <div className="bg-white opacity-60 rounded-2xl p-4 m-2 ">
                        <p className=" opacity-100 text-transparent text-3xl bg-clip-text bg-gradient-to-br from-[#1b82f8] to-[#a70b78]"> Your NFTs</p>
                        {userData.nfts.map(nft => {
                            return (
                                <div className="text-left text-gray-500 grid grid-cols-3 p-1">
                                    {nft.name}
                                    <div className=""></div>
                                    <button className="bg-black rounded-full text-white">select</button>
                                    
                                </div>);
                        })}
                        </div>
                        <div className="rounded-3xl  bg-gradient-to-tl from-rose-400 to-orange-300 p-4">
                            <h1 className="text-xl">Deposit your NFT</h1>
                            {/* {isAuthenticated()?(<div>
                                
                            </div>):(<div></div>)} */}
                            <NFTBalances/>
                            <OutlinedButton text="Deposit NFT" />

                        </div>
                        {/* Configure liq */}
                        <SetupTokens/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Liquifiy;
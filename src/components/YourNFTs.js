import React from "react";
// import axios from "axios";
import {useState,useEffect}from 'react';
import { useNFTBalances,useMoralis } from "react-moralis";
import {store_user_nfts} from '../data/LocalStorageHelper';

const NFTBalances = () => {
    const { getNFTBalances, data, error, isLoading, isFetching } = useNFTBalances();
    // const { authenticate, user } = useMoralis();
    
  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button onClick={() => getNFTBalances()}>Refetch NFTBalances</button>
      <pre>{!isLoading && !isFetching?data.response.items.map((nftItem)=>{
        return(<div>
        </div>)})
      :null}</pre>
      <div>
      </div>
    </div>
  );
};

function NftRow(){
  return (<div>
    hey
  </div>);
}

function YourNFTs(props) {
    

    return (<div className=" rounded-2xl text-center">
        {/* YOUR NFTs OR SHOW CONNECT WALLET */}
        <div className=" text-cyan-500 p-6 m-6">
            <h1>
                Your NFTs available
            </h1>
                <div className="text-cyan-500">
                    
                </div>
                <NFTBalances/>
        

        </div>
    </div>);
}

// }

export default YourNFTs;
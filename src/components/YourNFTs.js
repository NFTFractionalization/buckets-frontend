// import React from "react";
// // import axios from "axios";
// import {useState,useEffect}from 'react';
import { useNFTBalances, useMoralis } from "react-moralis";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";
// import {store_user_nfts} from '../data/LocalStorageHelper';




function YourNFTs(props) {

  const Web3Api = useMoralisWeb3Api();
  // const { getNFTBalances, data, error, isLoading, isFetching } = useNFTBalances();
  // const { authenticate, user } = useMoralis();
  const { fetch, data, error, isLoading } = useMoralisWeb3Api(Web3Api.account.getNFTs, {address: "0xf163aD3C908D158924F0eD0f6ea26EE76951eDef" });



  return (<div className=" rounded-2xl text-center">
    {/* YOUR NFTs OR SHOW CONNECT WALLET */}
    <div className=" text-cyan-500 p-6 m-6">
      <h1>
        Your NFTs available
      </h1>
      <div className="text-cyan-500">
        <div>
          {/* {error && <>{JSON.stringify(error)}</>} */}
          <button onClick={() => fetch()}>Refetch NFTBalances</button>
          {data !== undefined ? data.response.items.map((nftItem) => {
            return (<div>dfdf
            </div>)
          })
            : "show loading"}
          <div>
          </div>
        </div>

      </div>
      {/* <NFTBalances/> */}


    </div>
  </div>);
}

// }

export default YourNFTs;
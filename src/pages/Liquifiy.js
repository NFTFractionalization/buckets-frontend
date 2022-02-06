import React from 'react';
import { useState } from 'react';
import Navbar from "../components/Navbar"
import YourNFTs from "../components/YourNFTs"
import OutlinedButton from '../components/OutlinedButton';
import userData from '../data/userWallet';
import SetupTokens from '../components/SetupTokens.js'

// load json from userWallet.json into object
import { useMoralis, authenticate, enableWeb3 } from "react-moralis";
// import {Token } from "react-moralis";
import { Units} from "moralis";
import { useNFTBalances } from "react-moralis";
import { useWeb3Transfer } from 'react-moralis';
import { useEffect } from 'react';

const TransferNFT = (nft) => {
    // const { authenticate, isAuthenticated, user } = useMoralis();
    
    const {fetch, error, isFetching} = useWeb3Transfer({
        type: "erc721",
        amount: Units.Token(1,18),
        receiver: "0x54D713fDbDC1bD9634A83cF1ebe3Cb91825d536f", /* Daniel's address */
        contractAddress: "0x519498450961b093D78ab616A59fDadA2bc5C1f5",
        tokenId: 1,
        // params: {chainId:"mumbui"}
    });
  
    return (<div>
        {/* {isAuthenticated?<div>{user.getUser()}</div>:"NONE"} */}
      {error && <div>{error.toString()} </div>}
      <button onClick={() => fetch()} disabled={isFetching}>Transfer</button>
    </div>)
  }


function Liquifiy(props) {
    const {isInitialized, Moralis} = useMoralis();
    const [userNFTs, setUserNFTs] = useState([]);
    const [selectedNFT, setSelectedNFT] = useState({});
    // sending a token with token id = 1
    
    
    useEffect(()=>{
        if(isInitialized){
            Moralis.Web3.getNFTs({chain: "mumbai"}).then(setUserNFTs);
        }
    }, [isInitialized, Moralis]);
    
    if(!isInitialized){
        return null;
    }

    /*
    Moralis.onChainChanged(async function (chain){
        console.log(chain);
    });*/

    const options = {
        type: "erc721",
        receiver: "0x54D713fDbDC1bD9634A83cF1ebe3Cb91825d536f", /* Daniel's address */
        contractAddress: "0x2953399124f0cbb46d2cbacd8a89cf0599974963",
        tokenId: "0xf163ad3c908d158924f0ed0f6ea26ee76951edef000000000000010000000001"
    }
   
    return (
        <div className=" bg-black flex content-center bg-auto">
            <div className=" p-3 ">
                <div className=" text-white text-center ">
                    <h1 className="text-3xl m-3"> Liquifiy your nft </h1>
                    <div className="grid grid-cols-3 gap-3">
                        {/* Deposit nft section */}
                        <div className="bg-white opacity-80 rounded-2xl p-4 m-2 ">
                            <p className=" opacity-100 text-transparent text-3xl bg-clip-text bg-gradient-to-br from-[#1b82f8] to-[#a70b78]"> Your NFTs</p>
                    
                            {userNFTs.map(nft => {
                                return (
                                    <div className="text-left text-gray-500 grid grid-cols-3 p-1">
                                        <div className="flex flex-wrap justify-center content-fill">
                                            {/*<div className="sm:w-8/12 pr-2">
                                                <img src={nft.image} alt="..." className="rounded max-h-2/3 w-auto align-middle border-none" />
                                            </div>*/}
                                        </div>
                                        <div>
                                            {nft.name}
                                            <a href={nft.token_address}><p className="text-cyan-400 text-ellipsis overflow-hidden">{nft.token_address}</p></a>
                                        </div>
                                        <button value={nft} onClick={(e) => {
                                            setSelectedNFT(e.target.value)
                                            }} className="bg-black rounded-2xl text-white m-3">select</button>

                                    </div>);
                            })}
                        </div>
                        <div className="rounded-3xl  bg-gradient-to-tl from-rose-400 to-orange-300 mt-19">
                            <h1 className="text-xl">Deposit your NFT</h1>
                            {/* <NFTBalances /> */}
                            <p className="text-white text-2xl">Selected NFT</p>
                            <TransferNFT/>
                            {!selectedNFT ? <p> No NFT selected</p> : <p> {selectedNFT.toString()}</p>}
                            {/* <OutlinedButton  text="Deposit NFT" onClick={(options)=>transfer_nft(options)} /> */}

                        </div>
                        {/* Configure liq */}
                        <SetupTokens />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Liquifiy;
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
import { useWeb3Transfer } from 'react-moralis';
import { useEffect } from 'react';

function TransferNFT(props){
    const {fetch, error, isFetching} = useWeb3Transfer({
        type: "erc721",
        amount: Units.Token(1,18),
        receiver: "0x54D713fDbDC1bD9634A83cF1ebe3Cb91825d536f", /* Daniel's address */
        contractAddress: props.nft.token_address,
        tokenId: props.nft.token_id,
        // params: {chainId:"mumbui"}

        //THIS ISNT ACTUALLY RUNNING ;(
        onSuccess: ()=>{
            console.log("TRANSFER SUCCEEDED!!!");
            //props.userNFTs.filter(function(nft){return nft === props.nft});
            //props.setUserNFTs(props.userNFTs);
        }
    });
  
    return (<div>
      {error && <div>{error.toString()} </div>}
      <button className="bg-black rounded-2xl text-white m-3" onClick={() => fetch()} disabled={isFetching}>Transfer</button>
    </div>)
  }


function Liquifiy(props) {
    const {isInitialized, Moralis, authenticate, isAuthenticated} = useMoralis();
    const [userNFTs, setUserNFTs] = useState([]);
    const [selectedNFT, setSelectedNFT] = useState({});
    // sending a token with token id = 1
    
    
    useEffect(()=>{
        
        const EWeb3 = async () =>{
            await authenticate();
            if(isInitialized, isAuthenticated){
                Moralis.Web3.getNFTs({chain: "mumbai"}).then(setUserNFTs);
            }
        }
        EWeb3();
        
    }, [isInitialized, Moralis]);
    
    if(!isInitialized){
        return null;
    }
   
    return (
        <div className=" bg-black flex content-center bg-auto">
            <div className=" p-3 ">
                <div className=" text-white text-center ">
                    <h1 className="text-3xl m-3"> Liquifiy your nft </h1>
                    <div className="grid grid-cols-3 gap-3">
                        {/* Deposit nft section */}
                        <div className="bg-white opacity-80 rounded-2xl p-4 m-2 overflow-y-auto h-96">
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
                                        <TransferNFT nft={nft} userNFTs={userNFTs} setUserNFTs={setUserNFTs}/>
                                    </div>);
                            })}
                        </div>
                        <div className="rounded-3xl  bg-gradient-to-tl from-rose-400 to-orange-300 mt-19">
                            <h1 className="text-xl">Deposit your NFT</h1>
                            {/* <NFTBalances /> */}
                            <p className="text-white text-2xl">Selected NFT</p>
                            
                            {!selectedNFT ? <p> No NFT selected</p> : <p> {selectedNFT.name}</p>}
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
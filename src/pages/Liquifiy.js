import React from 'react';
import { useState } from 'react';
import OutlinedButton from '../components/OutlinedButton';
import SetupTokens from '../components/SetupTokens.js'
import VaultContents from '../components/VaultContents';
import VaultMinted from '../components/VaultMinted';
import YourNFTs from '../components/YourNFTs';
// import {ethers } from 'ethers';
import { Moralis} from 'moralis';
// load json from userWallet.json into object
import { useMoralis, useWeb3ExecuteFunction,  } from "react-moralis";

import { Units } from "moralis";
import { useWeb3Transfer } from 'react-moralis';
import { useEffect } from 'react';
import { VaultAddr, VaultABI } from '../VaultInfo';
import UserAssets from '../components/UserAssets';

function ErrorMessage(props){
    return(
        <div>{JSON.stringify(props.error)}</div>
    )
}



function TransferNFT(props){
    console.log("TOKEN ID: ", props.nft.token_id)
    console.log("TOKEN token_add: ", props.nft.token_address)
    console.log("vault ", VaultAddr);
    const {fetch, error, isFetching} = useWeb3Transfer({
        amount: Units.Token(1,18),
        type: "erc721",
        receiver: VaultAddr, /* Daniel's address */
        contractAddress: props.nft.token_address,
        tokenId: props.nft.token_id,
    });
  
    return (<div>
      {error && <div><ErrorMessage error={error}/> </div>}
      <button className="bg-black rounded-2xl text-white m-3" onClick={() => fetch()} disabled={isFetching}>Transfer</button>
    </div>)
  }


function Liquifiy(props) {
    // const {isInitialized, Moralis, authenticate, isAuthenticated, user} = useMoralis();
    const [userNFTs, setUserNFTs] = useState([]);
    const [userAddr, setUserAddr] = useState("");
    const [currentChain, setCurrentChain] = useState("mumbai");
    const [selectedNFT, setSelectedNFT] = useState({});

    function GetDeposits(props1){
        const {data, error, fetch, isFetching, isLoading} = useWeb3ExecuteFunction();
        let options = {
            abi: VaultABI,
            contractAddress: VaultAddr,
            functionName: "getDepositAmount",
            params: {
                account: "0xf163aD3C908D158924F0eD0f6ea26EE76951eDef"
            }
        }
        
    
        return (<div>
            {<ErrorMessage error={error} />}
            <button onClick={() => fetch({params:options.params, options})} disabled={isFetching}>Fetch data</button>
            {!isLoading && data!==null ? <div>{JSON.stringify(data)}</div> : null}
            {data && <pre>
              {JSON.stringify(data)}
              
              {console.log(data)}
            </pre>}
            <pre>{JSON.stringify(error, null, 2)}</pre>
                <pre>{JSON.stringify(isLoading, null, 2)}</pre>
          </div>)
    }
    // sending a token with token id = 1    
    
    // useEffect(()=>{
    //     const EWeb3 = async () =>{
    //         // await props.authenticate();
    //         if(props.isInitialized && props.isAuthenticated){
    //             Moralis.Web3.getNFTs().then(setUserNFTs);
    //             setUserAddr(props.user("ethAddress"));
    //         }
    //     }
    //     EWeb3();

        
        
    // }, [props.isInitialized, Moralis]);
    
    // if(!props.isInitialized){
    //     return null;
    // }
   
    return (
        <div className=" bg-black flex content-center bg-auto">
            <div className=" p-3 ">
                <div className=" text-white text-center ">
                    <h1 className="text-3xl m-3"> Liquifiy your nft </h1>
                    <div className="text-2xl m-3"> Wallet <p className="text-cyan-700">{userAddr}</p></div>
                    <div className="grid grid-cols-3 gap-3">
                        {/* Deposit nft section */}
                        <div className="bg-white opacity-80 rounded-2xl p-4 m-2 overflow-y-auto h-96">
                            <div className="grid grid-flow-col gap-0">
                                <p className="mt-2">🎨</p>
                            <p className=" opacity-100 text-transparent text-3xl bg-clip-text bg-gradient-to-br from-[#1b82f8] to-[#a70b78]"> Your NFTs</p>
                            <p className="mt-2">🎨</p>
                            <YourNFTs {...props}/>
                            </div>
                            {props.userNFTs.map(nft => {
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
                                        <TransferNFT nft={nft} userNFTs={props.userNFTs} setUserNFTs={props.setUserNFTs}/>
                                    </div>);
                            })}
                        </div>
                        <div className="rounded-3xl  bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 mt-19">
                            <h1 className="text-xl">Your Deposits</h1>
                            <GetDeposits userAddr={props.userAddr} />
                        </div>
                        {/* Configure liq */}
                        <SetupTokens />
                        <div className="grid grid-cols-2 gap-2">
                            <UserAssets {...props} />
                        </div>
                            <VaultContents {...props}/>
                            <VaultMinted {...props}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Liquifiy;
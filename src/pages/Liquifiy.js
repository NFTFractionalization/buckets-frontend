import React from 'react';
import { useState } from 'react';
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
            <button onClick={() => getNFTBalances({ params: { chain: "matic" } })}>Refetch NFTBalances</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>

        </div>
    );
};


function Liquifiy(props) {
    const { authenticate, isAuthenticated, user } = useMoralis();
    const [selectedNFT, setSelectedNFT] = useState(null);
    return (
        <div className=" bg-black flex content-center bg-auto">
            <div className=" p-3 ">
                <div className=" text-white text-center ">
                    <h1 className="text-3xl m-3"> Liquifiy your nft </h1>
                    <div className="grid grid-cols-3 gap-3">
                        {/* Deposit nft section */}
                        <div className="bg-white opacity-80 rounded-2xl p-4 m-2 ">
                            <p className=" opacity-100 text-transparent text-3xl bg-clip-text bg-gradient-to-br from-[#1b82f8] to-[#a70b78]"> Your NFTs</p>
                            {userData.nfts.map(nft => {
                                return (
                                    <div className="text-left text-gray-500 grid grid-cols-3 p-1">
                                        <div className="flex flex-wrap justify-center content-fill">
                                            <div className="sm:w-8/12 pr-2">
                                                <img src={nft.image} alt="..." className="rounded max-h-2/3 w-auto align-middle border-none" />
                                            </div>
                                        </div>
                                        <div>
                                            {nft.name}
                                            <a  href={nft.address}><p className="text-cyan-400">Address</p></a>
                                        </div>
                                        <button value={nft.name} onClick={(e)=>setSelectedNFT(e.target.value)}className="bg-black rounded-2xl text-white m-3">select</button>

                                    </div>);
                            })}
                        </div>
                        <div className="rounded-3xl  bg-gradient-to-tl from-rose-400 to-orange-300 p-4">
                            <h1 className="text-xl">Deposit your NFT</h1>
                            <NFTBalances />
                            <p className="text-white text-2xl">Selected NFT</p>
                            {!selectedNFT ? <p> No NFT selected</p> : <p> {selectedNFT.toString()}</p>}
                            <OutlinedButton text="Deposit NFT" />

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
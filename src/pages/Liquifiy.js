import React from 'react';
import Navbar from "../components/Navbar"
import YourNFTS from "../components/YourNFTs"
import OutlinedButton from '../components/OutlinedButton';
function Liquifiy(props) {
    return (
        <div className=" bg-bg0 flex bg-auto">
            <div className=" p-3 ">
                <div className=" text-white text-center ">
                    <h1 className="text-3xl"> Liquifiy your nft </h1>
                    <div className="grid grid-cols-2">
                        {/* Deposit nft section */}
                        <YourNFTS/>
                        <div className="rounded-3xl bg-gradient-to-tl from-rose-400 to-orange-300 p-4">
                            <h1 className="text-xl">Deposit your NFT</h1>
                            <form className="w-full max-w-sm">
                                <div class="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                            Full Name
                                        </label>
                                    </div>
                                    <div class="md:w-2/3">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"/>
                                    </div>
                                </div>
                            </form>
                            <OutlinedButton text="Select NFT" />

                        </div>
                        {/* Configure liq */}
                        <div className="rounded-3xl bg-gray-700 opacity-60 ">
                            <h1 className="rounded-3xl"> Setup Tokenezation</h1>
                            
                            <div>
                            <form className="w-full max-w-sm">
                                <div class="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                            Full Name
                                        </label>
                                    </div>
                                    <div class="md:w-2/3">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"/>
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Liquifiy;
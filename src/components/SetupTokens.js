import OutlinedButton from "./OutlinedButton";
// import React from "react";
import { useEffect, useState } from "react";

function SetupTokens(props) {

    const [priceMode, setPriceMode] = useState("");
    const [priceShare, setPriceShare] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [selectedNFT, setSelectedNFT] = useState("");
    const [symbol, setSymbol] = useState("");
    const [pricingMethod, setPricingMethod] = useState("Constant");
    function deposit() {
        // operator (account sending the nft)
        // tokenId (id of the nft)
        // nftAddrs (address of the nft)

    }

    function mintTokens() {
        // supply
        // amountToKeep


    }


    return (
        <div className=" rounded-2xl bg-gradient-to-bl from-[#CE4DA4] to-[#56E1FF] p-4">
            <div className="rounded-3xl ">
                <h1 className="rounded-3xl text-2xl pb-5"> Setup Tokenezation</h1>
                <div>
                    <form className="w-full max-w-sm">
                        <div class="md:flex md:items-center mb-6 pb-3">
                            <div className="md:w-1/3">
                                <label className="block text-gray-300 font-bold md:text-right mb-1  pr-4" for="inline-full-name">
                                    Total Supply
                                </label>
                                <label className="block text-gray-300 font-bold md:text-right mb-1  pr-4" for="inline-full-name">
                                    Token Symbol
                                </label>
                                <label className="block text-gray-300 font-bold md:text-right mb-1  pr-4" for="inline-full-name">
                                    Price per
                                </label>
                            </div>
                            <div class="md:w-2/3 ">
                                <input value={quantity} onChange={e => setQuantity(e.target.value)} className="mb-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " id="inline-full-name" type="text" placeholder="ex. 1100" />
                                <input value={symbol} onChange={e => setSymbol(e.target.value)} className="mb-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " id="inline-full-name" type="text" placeholder="ex. FRAC" />
                                <input value={priceShare} onChange={e => setPriceShare(e.target.value)} className="mb-2bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="0.2ETH" />
                            </div>
                        </div>
                    </form>


                    <label className="block text-gray-300 font-bold  mb-1 md:mb-0 " for="inline-full-name">
                        Pricing Method
                    </label>
                    <select value={pricingMethod} onChange={e => setPricingMethod(e.target.value)} class="form-select text-gray-400" aria-label="Default select example">
                        <option value="Constant" >Constant</option>
                        <option value="Pool">Pool Deposit</option>
                    </select>
                    {pricingMethod === "Constant" ? <div>
                        <p> You will recive all shares</p>
                    </div> : <div className="grid grid-cols-2">
                        <form>

                            <label className="block text-gray-300 font-bold  mb-1 md:mb-0 " for="inline-full-name">
                                Choose Bucket
                            </label>
                            <select value={selectedNFT} onChange={e => setSelectedNFT(e.target.value)} class="form-select text-gray-400" aria-label="Default select example">
                                <option value="Bucket1" selected>Bucket1</option>
                                <option value="Bucket0">Bucket2</option>
                            </select>
                            <input value={quantity} onChange={e => setQuantity(e.target.value)} className="mb-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="bucketShares" type="text" placeholder="% to Bucket" />
                        </form>



                    </div>}
                    <OutlinedButton text="Mint Tokens" onClick={mintTokens()} />


                </div>
            </div>
        </div>
    );
}

export default SetupTokens
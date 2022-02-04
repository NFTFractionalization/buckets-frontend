import React from "react";
import { useState, useEffect } from "react";


function TradeFractions(props) {

    const [quantity, setQuantity] = useState(0);
    const [usdEquiv, setUsdEquiv] = useState(0);
    const [pricePerNft, setPricePerNft] = useState(0);


    return (
        <div className="bg-black text-white text-center align-center">
            <h1 className="text-3xl">Trade Fractions</h1>
            <div className="bg-gradient-to-br from-[#CE4DA4] to-[#7353E5] rounded-3xl">
                <div className="max-w-xs p-10">
                    <div className="p-5 self-center">
                        <img src={props.imgUrl} />
                        <h2 className="text-xl">{props.name}</h2>
                    </div>
                </div>
                {/* you send */}
                <div className="p-3">
                    <div className="bg-white rounded-3xl p-3 opacity-3">
                        <p className="text-left text-2xl decoration-4 text-transparent bg-clip-text bg-gradient-to-br from-[#CE4DA4] to-[#7353E5]">
                            You send
                        </p>

                        <p className="text-right align-bottom text-gray-500 text-2xl decoration-4 text-transparent bg-clip-text bg-gradient-to-br from-[#CE4DA4] to-[#7353E5]">
                            {quantity} @ {pricePerNft} ETH/share = {quantity * pricePerNft}ETH ({usdEquiv} USD)
                        </p>
                    </div>
                </div>


                <div className="p-3">
                    <div className="rounded-3xl border-solid">
                        <div className=" justify-between bg-transparent rounded-3xl">
                            <div className="text-white decoration-4 text-light flex">
                                <form>
                                    <div class="flex items-right border-b border-teal-500 py-2 mx-20">
                                        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 " type="text" placeholder="Quantity" aria-label="Quantity" />
                                    </div>
                                </form>
                                <p className="text-left text-2xl text-white text-transparent">
                                    You receive
                                </p>

                            </div>

                            {/* <input /> */}
                        </div>
                    </div>
                </div>

                {/* you receive  */}


                {/* Confirm */}
            </div>
        </div>
    );
}

export default TradeFractions
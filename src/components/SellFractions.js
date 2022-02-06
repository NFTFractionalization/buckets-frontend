import React from "react";
import { useState, useEffect } from "react";
import OutlinedButton from "./OutlinedButton";


function SellFractions(props) {

    const [quantity, setQuantity] = useState(0);
    const [usdEquiv, setUsdEquiv] = useState(1223);
    const [usdEquivBalance, setUsdEquivBalance] = useState(1223);
    const [pricePerNft, setPricePerNft] = useState(props.sharePrice);
    const [totalCost, setTotalCost] = useState(0);
    const [ethBalance, setEthBalance] = useState("2.2")
    function calcCost() {
        // 
        // slice at first space
        setTotalCost(parseFloat(pricePerNft.split(/[ ,]+/)) * quantity);
        // updateUSDEquiv();
    }

    function updateUSDEquiv(q){
        // Get price of eth maybe graph or moralis
        let eth_price = 2333.40
        
        setUsdEquiv(q * eth_price);
        // setTotalCost(quantity
    }

    function updateUSDEquivBalance(q){
        // Get price of eth maybe graph or moralis
        let eth_price = 2333.40
        setUsdEquiv(q * eth_price);
        // setTotalCost(quantity
    }

    function updateQuantity(q) {
        setQuantity(q);
        updateUSDEquiv(q);
        calcCost();

    }


    return (
        <div className="bg-black text-white text-center content-center">
            <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-tl from-[#CE4DA4] to-[#7353E5] text-semibold">Sell Fractions</h1>
            <div className="bg-gradient-to-br from-[#195a8f] to-[#e931e0] rounded-3xl p-3 m-5">
                <div className="max-w- p-5">
                    <div className="p-5 content-center">
                        {/* <img src={props.image} /> */}
                        <h2 className="text-3xl">{props.name}</h2>
                    </div>
                </div>
                <div className="m-5 p-3">
                    {/* <div className="p-3"> */}
                    <div className=" m-2 2 grid grid-cols-2 gap-3 rounded-3xl">
                        <div className="bg-white rounded-3xl p-2">
                            <p className="text-transparent text-left text-4xl bg-clip-text bg-gradient-to-br from-[#f70ca8] to-[#4e0f5e]"
                            >Quantity
                            </p>
                            <form>
                                <div className=" content-left border-b-4 border-teal-500 py-2 mr-4" >
                                    <input value={quantity} onChange={e => updateQuantity(e.target.value)} className="appearance-none  text-4xl bg-transparent border-none text-gray-700 mr-3 py-1  " type="text" placeholder="#" aria-label="Quantity" />
                                </div>
                            </form>

                        </div>
                        <div className="bg-white rounded-3xl p-2">
                            <p className="text-black opacity-50 text-left text-4xl "
                            >Wallet Balance
                            </p>
                            <p className="text-right text-4xl decoration-4 text-transparent bg-clip-text bg-gradient-to-br from-[#CE4DA4] to-[#7353E5]">
                                {usdEquivBalance}
                            </p>
                            <p className="text-right text-4xl decoration-4 text-transparent bg-clip-text bg-gradient-to-br from-[#CE4DA4] to-[#7353E5]">
                                {ethBalance} ETH
                            </p>
                            

                        </div>

                    </div>
                </div>
                {/* you send */}
                <div className="m-3  bg-white rounded-3xl ">
                    <div className="p-3 grid grid-cols-2 ">
                        <div className="w-xs">
                            <p className="text-left text-2xl decoration-4 text-transparent bg-clip-text bg-gradient-to-br from-[#CE4DA4] to-[#7353E5]">
                                Total Cost
                            </p>
                            <p className="text-left text-4xl decoration-4 text-transparent bg-clip-text bg-gradient-to-br from-[#CE4DA4] to-[#7353E5]">
                                {usdEquiv}
                            </p>
                        </div>
                        <p className="text-left align-bottom text-gray-500 text-2xl decoration-4 text-transparent bg-clip-text bg-gradient-to-br from-[#CE4DA4] to-[#7353E5]">
                            {quantity} @ {pricePerNft} /share = {totalCost}ETH ({usdEquiv} USD)
                        </p>
                    </div>
                    <div className="pt-3">
                        <button className="rounded-3xl bg-gradient-to-r p-[4px] mb-4 from-[#7928ca] to-[#ff0080]">
                            <div className="flex justify-between bg-white rounded-3xl  hover:bg-gradient-to-r p-[4px] from-[#7928ca] to-[#ff0080]">
                                <div className="decoration-9 text-[#7928ca] to-[#ff0080] flex m-2 pl-3 pr-3 hover:text-white">
                                    Sell {props.symbol}
                                </div>
                            </div>
                        </button>
                    </div>
                </div>



                {/* you receive  */}


                {/* Confirm */}
            </div>
        </div>
    );
}

export default SellFractions;
import React from "react";
import BuyFractions from '../components/BuyFractions';
import SellFractions from '../components/SellFractions';
// import SellFractions from '../components/SellFractions';
import GradientText from "../components/GradientText";
import BoxOutlined from "../components/Box";
import AssetList from '../components/AssetList';
import RecentTrades from '../components/RecentTrades';
function CollectionExample(props) {
    return (
        <div className="p-10 bg-black content-center" >
            {/* title of collection */}
            <div className="text-center p-1 text-white">
                <h1 className=" text-6xl pb-3">Degen Defi Bucket</h1>
                <div className="mx-4">
                    <button className="px-4 py-2 mx-2 bg-gradient-to-br from-[#CE4DA4] to-[#7353E5] hover:bg-gray-300 text-sm font-medium rounded-full">
                        22 NFTs
                    </button>
                    <button className="px-4 py-2 mx-2 bg-gradient-to-br from-[#CE4DA4] to-[#53dbe5] hover:bg-gray-300 text-sm font-medium rounded-full">
                        Verified
                    </button>
                </div>
            </div>
            <div className="bg-black pl-2">
                <div className="grid grid-cols-2 gap-4 ">
                    <div>
                    <div className=" p-1 m-3 rounded-3xl bg-gradient-to-tl from-purple-400 to-yellow-400 hover: scale-80">
                        <div className="rounded-3xl bg-black m-2">
                            <img src={props.image} className="w-30 content-center" />
                            <BoxOutlined {...props}></BoxOutlined>
                            
                            </div>
                        </div>
                        <div className="text-center  m-1">
                            <p className=" text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-[#CE4DA4] to-[#56E1FF]"> Bucket Assets</p>
                        </div>
                        <div className="rounded-xl p-2 bg-gradient-to-bl from-[#CE4DA4] to-[#56E1FF] ">
                            <AssetList {...props} />
                        </div>
                    </div>
                    <div className="content-center items-center">
                    <BuyFractions {...props} />
                    <SellFractions {...props} />
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default CollectionExample;
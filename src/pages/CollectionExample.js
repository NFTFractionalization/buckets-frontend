import React from "react";
import BuyFractions from '../components/BuyFractions';
import SellFractions from '../components/SellFractions';
// import SellFractions from '../components/SellFractions';
import AssetList from '../components/AssetList';
function CollectionExample(props) {
    return (
        <div className="pt-10 bg-black" >
            {/* title of collection */}
            <div className="text-center p-4 text-white">
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
            <div className="pl-4 bg-black align-center">
                <div className="grid grid-cols-2 items-center">
                    <div className="content-center items-center m-5">
                        <div className="text-center pt-3 m-1">
                            <p className=" text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-[#CE4DA4] to-[#56E1FF]"> Bucket Assets</p>
                        </div>
                        <div className="rounded-xl p-2 bg-gradient-to-bl from-[#CE4DA4] to-[#56E1FF] p-4">
                            <AssetList {...props} />
                        </div>
                    </div>
                    <div className="content-center  bg-black w-50 h-auto">
                        <img src={props.image} />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    {/* Similar buckets */}
                    {/* Trade fractions */}
                    <SellFractions {...props} />
                    <BuyFractions {...props} />

                </div>
            </div>
        </div>
    );
}

export default CollectionExample;
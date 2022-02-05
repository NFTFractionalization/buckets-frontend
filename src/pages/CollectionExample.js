import React from "react";
import TradeFractions from '../components/TradeFractions';
import AssetList from '../components/AssetList';
function CollectionExample(props) {
    return (
        <div className="pt-10 bg-black" >
            {/* title of collection */}
            <div className="text-center p-4 text-white">
                <h1 className=" text-6xl pb-3">Degen Defi Bucket</h1>
                <div className="mx-4">
                    <button class="px-4 py-2 mx-2 bg-gradient-to-br from-[#CE4DA4] to-[#7353E5] hover:bg-gray-300 text-sm font-medium rounded-full">
                        22 NFTs
                    </button>
                    <button class="px-4 py-2 mx-2 bg-gradient-to-br from-[#CE4DA4] to-[#53dbe5] hover:bg-gray-300 text-sm font-medium rounded-full">
                        Verified
                    </button>
                </div>
            </div>
            <div className="pl-4 bg-black">
                <div className="grid grid-cols-2">
                    <div className="content-center items-center">
                        <img src={props.image}/>
                        <div className="text-center">
                            <p className="text-white text-3xl">Assets</p>
                        </div>
                        <div className="rounded-xl bg-gray-500">
                            <AssetList {...props}/>
                        </div>
                    </div>
                    <div>
                        {/* Similar buckets */}
                        {/* Trade fractions */}
                        <TradeFractions {...props}/>
                        
                    </div>
                </div>
            </div>
            {/* pills showing traits */}
            {/* list of NFTs */}
            {/* similar buckets */}
            {/* Trade fractional */}

        </div>
    );
}

export default CollectionExample;
import React from "react";
function Bucket(props) {
    return (
        <div className="flex flex-wrap justify-center text-white m-2">
            <div className=" rounded-xl bg-gradient-to-br p-[7px] from-[#ca28bc] to-[#001aff]">
                <div className="flex  bg-black rounded-xl">
                    <div className="pl-3">
                        <h3 className="pt-2 text-2xl"> {props.name} </h3>
                        <img className=" p-4 h-42 w-86 object-scale-down" src={props.image} />
                        <div className="pl-2 grid grid-cols-2">
                            <div className="text-left">
                                <p className="text-xl decoration-8">$ 22.22 / Drop </p>
                                <p className="text-gray-400">Total supply: {props.token_supply}</p>
                                {/* <p className="text-gray-400">Implied Valuation: {props.} </p> */}
                            </div>
                            <div className="justify-end">
                                <button className="rounded-2xl p-2 bg-gradient-to-br from-[#ca28bc] to-[#001aff]">
                                    {/* <img src="./assets/bucket.svg" /> */}
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Bucket;
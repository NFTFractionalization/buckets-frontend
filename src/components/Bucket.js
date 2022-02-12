import React from "react";
import BoxOutlined from "./Box";

function Bucket(props) {
    return (
        <div className="flex flex-wrap justify-center text-white m-2">
            <div className=" rounded-xl bg-gradient-to-br p-[7px] from-[#ca28bc] to-[#001aff]">
                {/* <div className=" rounded-2xl bg-white bg-opacity-20"> */}
                <div className="flex  rounded-xl">
                    <div className="pl-3">
                        <h3 className="pt-2 text-3xl"> {props.name} </h3>
                        <p className="text-pink-400"> Description {props.description} </p>
                        <img className=" p-4 h-42 w-86 object-scale-down" src={props.image} />
                        <p className="text-gray-400">Followers: {props.follower_count} </p>
                        <p className="text-gray-500">  Holders: {props.holders} </p>
                        <BoxOutlined {...props} />
                        <div className="p-3 m-2 grid grid-cols-2">
                            {/* <button className="rounded-2xl px-4 m-1 bg-gradient-to-br p-[7px] from-[#1d2c86] to-[#05c545]">
                                <p className=" px-1 opacity-100 text-white">Buy</p>
                            </button>
                            <button className="opacity-100 rounded-2xl m-1 bg-gradient-to-br p-[7px] from-[#ca2830] to-[#fc7184]">
                                <p className="text-white">Sell</p>
                            </button> */}
                        </div>
                        <div className="pl-2 grid grid-cols-2">
                            <div className="text-left">
                                <p className="text-xl decoration-8">$ {props.sharePrice} / Drop </p>
                                <p className="text-gray-400">Total supply: {props.token_supply}</p>

                            </div>
                            <div className="">
                                <button className=" rounded-3xl bg-gradient-to-tr p-[3px] from-[#ca28bc] to-[#001aff] hover: bg-white text-blue-300">
                                    <div className="flex flex-col justify-between  bg-black rounded-3xl hover:bg-gradient-to-tr from-[#ca28bc] to-[#001aff]">
                                        <div className="text-white decoration-4 text-light flex justify-between m-2 pl-3 pr-3 hover:text-white">
                                            View Bucket
                                        </div>
                                    </div>
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
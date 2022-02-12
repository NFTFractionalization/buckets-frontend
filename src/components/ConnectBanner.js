import React from "react";
import OutlinedButton from "./OutlinedButton";
function ConnectBanner() {
    return (
        <div className="p-4 bg-gray-600 rounded-3xl p-5 m-6">
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <p className="text-white text-4xl text-left m-4">Connect your wallet and start trading today</p>
                </div>
                <div className=" grid grid-cols-2 gap-1 text-white">
                        <button className="rounded-3xl m-3 bg-gradient-to-br p-[7px] from-[#1d2c86] to-[#05c545]">Get Started</button>
                        <OutlinedButton text="Connect Wallet" />
                </div>
            </div>
        </div>
    );
}

export default ConnectBanner;
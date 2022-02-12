// Component to get the tokens minted by the vault

import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import OutlinedButton from "./OutlinedButton";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";
import { VaultAddr } from "../VaultInfo";
export default function VaultMinted(props){
    const Web3Api = useMoralisWeb3Api();
    const { fetch, data, error, isLoading } = useMoralisWeb3ApiCall(useWeb3ExecuteFunction, { chain: "0x13881", address: VaultAddr });

    return (
    <div className="bg-black">
        <div className="bg-white bg-opacity-30 rounded-3xl m-2 p-3">
            <p className="text-2xl text-black pb-1">🪣  Vault Minted Tokens 🪣 </p>
            <OutlinedButton className="bg-white text-black" onClick={() => fetch()}> Load Mints</OutlinedButton>
            {!isLoading && data!==null ?
            data.result.map((item, i) => {
                return <div className="bg-white text-white rounded-2xl bg-opacity-30 my-3 mx-2" key={i}>
                    <div className="grid grid-cols-4 gap-3 items-center">
                        <div>
                            <img src={item.token_uri} className="h-15 w-15  rounded-md" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-left my-0">name</p>
                            <p>{item.name}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-left">symbol</p>
                            <p className="text-cyan-400 text-2xl pl-2">{item.symbol}</p>
                        </div>
                        <div className="">
                            <p> Total Supply </p>
                            <p className="text-cyan-400 text-xl pl-2">{item.total_supply}</p>
                        </div>
                    </div>
                </div>
                            } )
                            :<div>NO</div>}
                            <pre>{JSON.stringify(data, null, 2)}</pre>
                <pre>{JSON.stringify(error, null, 2)}</pre>
                <pre>{JSON.stringify(isLoading, null, 2)}</pre>
                </div>

    </div>
    );
}
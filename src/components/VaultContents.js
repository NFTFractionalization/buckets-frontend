import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import OutlinedButton from "./OutlinedButton";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";
import { VaultAddr } from "../VaultInfo";

export default function VaultContents(props) {
    const Web3Api = useMoralisWeb3Api();

    const { fetch, data, error, isLoading } = useMoralisWeb3ApiCall(Web3Api.account.getNFTs, { chain: "0x13881", address: VaultAddr });
    return (
        <div className="bg-white bg-opacity-30 rounded-3xl">
            <p className="text-3xl text-purple-400 m-3 p-3"> 🍭 Vault Contents 🍭 </p>
            {/* <div className="grid grid-cols-4"> */}
            <div className="bg-white text-white rounded-2xl bg-opacity-30 mx-2">
                <p>Total NFTS In Vault</p>
                <p className="text-cyan-400 text-2xl">{data!==null? data.total:0
                }</p>
            </div>
            {!isLoading && data!==null ? <div>
                {data.result.map((item, i) => {
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
                                <p className="text-cyan-400 text-xl pl-2">{item.symbol}</p>
                            </div>
                            <div className="">
                                <p className="text-gray-400" > addr </p>
                                <a href={`https://mumbai.polygonscan.com/address/${item.token_address}`}><p className="text-blue-400 underline text-xl pl-2">view</p></a>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                } )}
                    </div> : <OutlinedButton  text="Load Contents" onClick={()=>fetch()}></OutlinedButton>}
                {/* <pre>{JSON.stringify(data, null, 2)}</pre>
                <pre>{JSON.stringify(error, null, 2)}</pre>
                <pre>{JSON.stringify(isLoading, null, 2)}</pre> */}
            </div>
    );
}
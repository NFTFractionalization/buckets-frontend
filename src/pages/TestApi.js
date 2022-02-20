import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";
import { useState } from "react";
// import { useWeb3Transfer, useMoralis } from "react-moralis";
import OutlinedButton from "../components/OutlinedButton";
const api_key = "rxTpBKT5ekjexnqIEuvrPVV4n82wCvdHeVJZQ6OVLH9jr672wpgWDMeKXwtmMU8H"
const server_url="https://dknqzlqdlam7.usemoralis.com:2053/server"
const vault_addr = "0xdb9af821589e4c42832bc467de7be1362e919167"
export default function TestApi(){
    const Web3Api = useMoralisWeb3Api();
    // appId="1sNeRHQBsq5ZihAYmV3tcEVlWqoNe3aQMfR0EwxK"
    // useMoralisWeb3Api(api_key, server_url, {
    const { fetch, data, error, isLoading} = useMoralisWeb3ApiCall(Web3Api.token.getNFTMetadata, {chain:"0x13881", address:vault_addr});

    // This is a file to test the api
    return (<div className="text-white">
        <p>This is a file to test the api</p>
        <div>
            <OutlinedButton  text="TEST API" onClick={()=>fetch()}>TEST API</OutlinedButton>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <pre>{JSON.stringify(error, null, 2)}</pre>
            <pre>{JSON.stringify(isLoading, null, 2)}</pre>
        </div>
    </div>);



}
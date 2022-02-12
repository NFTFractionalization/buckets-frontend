import OutlinedButton from "./OutlinedButton";

function AssetList(props) {
    return (
        <div className="m-3 pt-3 p-3  bg-opacity-90 rounded-3xl">
            {props.nfts.map((nft, i) => {
                return (
                    <div className="max-h-xs p-2 bg-white rounded-2xl opacity-75 m-2 rounded-2xl">
                        <div className=" grid grid-cols-4">
                            <img className="h-18 w-36  rounded-2xl" src={nft.image} />
                            {/* <p className="px-2">{nft.name}</p> */}
                        <div className="flex-row">
                            <p className="text-gray-400">Implied Valuation:</p>
                            <p className="text-3xl text-cyan-400">{nft.imp_val_nft} </p>
                            <p className="text-gray-400">Last sale: </p>
                            <p className="text-3xl text-cyan-400">{nft.last_sale} </p>
                        </div>
                        <div className="flex-row">
                            <p className="text-gray-400"># of Unique owners:</p>
                            <p className="text-3xl text-cyan-400">{nft.unique_owners} </p>
                            <p className="text-gray-400">Shares avail. </p>
                            <p className="text-3xl text-cyan-400">{nft.tokens_avail} </p>
                        </div>
                        <div className="flex-col text-white text-right p-2">
                        <p className="text-transparent text-3xl bg-clip-text bg-gradient-to-br from-[#CE4DA4] to-[#7353E5]">{nft.token_price} ETH</p>
                        <p className="text-gray-400">/Share</p>
                            <OutlinedButton text="Trade" />
                        </div>
                        </div>
                        
                    </div>
                );
            })}
        </div>

    );
}
export default AssetList;
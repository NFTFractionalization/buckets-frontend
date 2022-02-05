function AssetList(props) {
    return (
        <div className="m-3 pt-3 p-3  bg-opacity-30 rounded-3xl">
            {props.nfts.map((nft, i) => {
                return (
                    <div className="flex flex-col p-3 bg-white opacity-75 m-3 rounded-2xl">
                        <img src={nft.image}/>
                        <p className="px-2">{nft.name}</p>
                        <p>{nft.name}</p>
                    </div>
                );
            })}
        </div>

    );
}
export default AssetList;
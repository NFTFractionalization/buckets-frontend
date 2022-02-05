function AssetList(props) {

    

    return (
        <div>
            {props.nfts.map((nft, i) => {
                return (
                    <div className="flex flex-row">
                        <p>{nft.name}</p>
                        <p>{nft.name}</p>
                    </div>
                );
            })}
        </div>

    );
}
export default AssetList;
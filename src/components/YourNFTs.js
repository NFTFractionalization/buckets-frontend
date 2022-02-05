import React from "react";
function YourNFTs(nfts) {
    function nftList() {
        // const listItems = 
        return (<div className="bg-black">
            {nfts.map((nft, index) => {return(<div key={index}><nftRow{...nft}/></div>);})}
        </div>);
    }
    return (<div className="p-3 bg-white opacity-50 rounded-2xl text-center">
        {/* YOUR NFTs OR SHOW CONNECT WALLET */}
        <div className="opacity-100 text-black">
            <h1>
                Your NFTs available
                {/* {props} */}
            </h1>
            {()=>nftList}

            <div className="grid grid-cols-3">
                {/* <p>{props.name}</p> */}
                <button>select</button>
            </div>
        </div>
    </div>);
}



function nftRow(props) {
    return (<div className="bg-white">
        <div className="">
            <p>{props.name}</p>
            <button>select</button>
        </div>
    </div>);
}

export default YourNFTs;
import React from 'react';

export function Box(props){
    return (
        // <div className="max-h-md max-w-md rounded-2xl text-center border-white border-4 m-3 p-2">
        //     <p className={props.color_text +" text-2xl align-middle pt-1 opacity-90 p-2" }> {props.value}</p>
        //     <p className = "text-gray-400 -1">{props.label}</p>

        //     {/* label */}
        // </div>
        <div className="h-30 w-auto max-w-xs bg-white text-white  shadow-2xl shadow-cyan rounded-2xl bg-opacity-20 text-center m-3 hover:shad">
            <p className = "text-gray-300 ">{props.label}</p>
            <p className={props.color_text +" text-3xl align-middle opacity-100"}>{props.value}</p>

            {/* label */}
        </div>
    );
}

function BoxOutlined(props){

    const arr = [
        {label: "imp val.", value:props.imp_val_col, color_text:"text-white"},
        {label: "n-th price", value:props.sharePrice, color_text:"text-white"},
        {label: "# nfts", value:props.nft_count, color_text:"text-white"},
        {label: "Token supply", value:props.token_supply, color_text:"text-white"}
    ]

    return (
        <div>
            <div className="grid grid-cols-4">
                    
                    {arr.map((item, i) =>{
                        return <Box {...item} key={i}/>
                    } )}
            </div>

    </div>
    );
}

export default BoxOutlined; 
import React from "react";
function OutlinedButton(props) {
    return (
        <div className="pt-4">
            <button onClick={() => props.onClick} className="rounded-3xl bg-gradient-to-r p-[3px] from-[#7928ca] to-[#ff0080]">
                <div className="flex justify-between bg-black rounded-3xl">
                    <div className="text-white decoration-4 text-light flex m-2 pl-3 pr-3">
                        {(props !== undefined && props.text !== undefined) ? props.text : "Browse Buckets"}
                    </div>
                </div>
            </button>
        </div>
    );
}

export default OutlinedButton;
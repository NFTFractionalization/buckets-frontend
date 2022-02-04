function TradeFractions(props){
    return(
        <div className="bg-black text-white align-center">
            <h1>Trade Fractions</h1>
            <div className="bg-gradient-to-br from-[#CE4DA4] to-[#7353E5] rounded-3xl">
                <div className="max-w-xs p-10 text-center ">
                    <div className="p-5">
                        <img src={props.imgUrl}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TradeFractions
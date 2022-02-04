function Bucket(props) {
    return (
        <div className="flex flex-wrap justify-center text-white">
            <div className=" rounded-xl bg-gradient-to-r p-[7px] from-[#ca28bc] to-[#001aff]">
                <div className="flex  bg-black rounded-xl">
                    <div className="pl-3">
                        <h3 className="pt-2 text-2xl"> Ape Shit </h3>
                        <img className=" p-4 h-42 w-86 object-scale-down" src="./assets/BAYC_imgs.svg" />
                        <div className="pl-2 grid grid-cols-2">
                            <div className="text-left">
                                <p className="text-xl decoration-8">$ 22.22 / Drop </p>
                                <p className="text-gray-400">Total supply: 1200</p>
                                <p className="text-gray-400">Implied Valuation: 22k </p>
                            </div>
                            <div className="pb-3">
                                <button className="rounded-2xl bg-gradient-to-r from-[#ca28bc] to-[#001aff]">
                                    <img src="./assets/bucket.svg" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Bucket;
import { bucketList } from "../data/BucketExamples";



function BucketsPage(props) {

    return (
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white p-4">
            {/* TOP BUCKETS */}
            <div className="grid grid-cols-2 bg-inherit">
                {/* {props.top_buckets[0]} */}
                <div className="bg-black">
                    <p className="text-3xl">Top Buckets</p>
                    <div>
                    {props.top_buckets.map((bucket, i) => {
                        return (
                            <div className="flex flex-wrap justify-center text-white m-2" key={props.key}>
                            <div className=" rounded-xl">
                                <div className="flex  rounded-xl">
                                    <div className="pl-3">
                                        <h3 className="pt-2 text-2xl"> {props.collection_name} </h3>
                                        {/* <img className=" p-4 h-42 w-86 object-scale-down" src={props.image} /> */}
                                        <div className="pl-2 grid grid-cols-2">
                                            <div className="text-left">
                                                <p className="text-xl decoration-8">$ 22.22 / Drop </p>
                                                {/* <p className="text-gray-400">Total supply: {props.token_supply}</p> */}
                                                {/* <p className="text-gray-400">Implied Valuation: {props.} </p> */}
                                            </div>
                                            <div className="justify-end">
                                                <button className="rounded-2xl p-2 bg-gradient-to-br from-[#ca28bc] to-[#001aff]">
                                                    {/* <img src="./assets/bucket.svg" /> */}
                                                    View
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
                            </div>
                        </div>)
                    })
                    }
                    {/* {props.d */}
                    {/* <bucketList/> */}
                </div>
                </div>
            </div>
            {/* TOP FRACT TOKENS */}
            {/* SIMILAR TO YOURS */}





        </div>);
}

export default BucketsPage;
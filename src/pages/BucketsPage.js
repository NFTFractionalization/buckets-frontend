import { bucketList } from "../data/BucketExamples";
import Box from "../components/Box";
import GradientText from "../components/GradientText";
function BucketsPage(props) {

    const romans = {
        
    }

    return (
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white p-2">
            {/* TOP BUCKETS */}
            <div className="grid grid-rows-2 bg-inherit">
                {/* {props.top_buckets[0]} */}
                <div className="">
                    <p className="text-3xl text-center">Top Buckets</p>
                    <div>
                        {props.top_buckets.map((bucket, i) => {
                            return (
                                <div className="justify-center bg-black opacity-90 rounded-3xl text-white m-2" key={props.key}>
                                    <div className=" rounded-xl opacity-100">

                                        <div className="p-3">
                                            <h3 className="pt-3 pl-3 text-3xl"> {bucket.collection_name} </h3>
                                            {/* <img className=" p-4 h-42 w-86 object-scale-down" src={bucket.image} /> */}
                                            <div className="pl-2 grid grid-cols-4 m-4 bg-black">
                                                <div className="text-left p-1">
                                                    <p className="text-cyan-400">floor (7d) {bucket.floor_price_quote_7d}</p>
                                                    <p className="text-pink-600">quote vol(24h) {bucket.volume_quote_24h} </p>
                                                    <p className="text-purple-700"># {bucket.unique_token_ids_sold_count_alltime} Uniques</p>
                                                    <p className="text-pink-300"> {bucket.unique_wallet_purchase_count_alltime} exchanges</p>
                                                </div>
                                                <div className="">
                                                    <button className="rounded-2xl p-2 bg-gradient-to-br from-[#ca28bc] to-[#001aff]">
                                                        {/* <img src="./assets/bucket.svg" /> */}
                                                        View
                                                    </button>
                                                    <GradientText></GradientText>
                                                    <Box></Box>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>)
                        })
                        }
                        {/* {props.d */}
                        <bucketList/>
                    </div>
                </div>
            </div>
            {/* TOP FRACT TOKENS */}
            {/* SIMILAR TO YOURS */}





        </div>);
}

export default BucketsPage;
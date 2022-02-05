import React from "react";
import Bucket from "./Bucket";
import { bucketList } from "../data/BucketExamples";
export function BucketView() {
    // return(
    function BucketList() {
            // const listItems = 
            return (<div className="bg-black grid grid-cols-3">
                {bucketList.map((bucket, index) => {return(<div key={index}><Bucket {...bucket}/></div>);})}
            </div>);
        }


    return (<div className="grid grid-cols-3 p-1">
        {bucketList.map((bucket, i) => {
            return (<div key={i}>
                <Bucket {...bucket} />
            </div>);
        })
}</div>);
}
export default BucketView;
import React from "react";
import Bucket from "./Bucket";
import { bucketList } from "../data/BucketExamples";

export function BucketView() {

    return (<div className="grid grid-cols-3 p-1">
        {bucketList.map((bucket, i) => {
            return (<div key={i}>
                <Bucket {...bucket} />
            </div>);
        })
}</div>);
}
export default BucketView;
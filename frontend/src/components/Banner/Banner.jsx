import { Suspense, useEffect, useState} from "react";
import { Await } from "react-router-dom";
import SmallCard from "../smallCard/smallCard";
import './banner.scss';
const Banner = ({ title, fetchData }) => {

    console.dir("Data in the Banner" + fetchData.postResponse);
    const [data,setData]=useState(fetchData);

    useEffect(()=>{
        setData(fetchData);
    },[fetchData])

    return (
        <div className="banner">
            <div className="title">
                <span>
                    <hr />
                    <h1>{title}</h1>
                    <hr />
                </span>
            </div>
            <div className="row">
                <Suspense fallback={<p>Loading...</p>}>
                    <Await
                        resolve={data.postResponse}
                        errorElement={<p>Error loading posts!</p>}
                    >
                        {(postResponse) =>
                            postResponse.data.map((post) => (

                                <SmallCard key={post.id} item={post} animation="flip-up" />
                            ))
                        }
                    </Await>
                </Suspense>
            </div>
        </div>
    );
}

export default Banner;
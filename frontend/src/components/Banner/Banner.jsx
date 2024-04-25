import { Suspense, useEffect, useState} from "react";
import { Await } from "react-router-dom";
import SmallCard from "../smallCard/smallCard";
import './banner.scss';

const Banner1 = ({ title, fetchData }) => {

    console.dir("Data in the Banner" + fetchData.postResponse);
    const [data,setData]=useState(fetchData);

    useEffect(()=>{
      
        setData(fetchData);

    }
    ,[fetchData])

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
                            postResponse.data.filter(post => post.property === "condo").slice(0,8)
                            .map((post) => (
                                <SmallCard key={post.id} item={post} animation="flip-up" />
                            ))  
                        }
                    </Await>
                </Suspense>
            </div>
        </div>
    );
}

const Banner2 = ({ title, fetchData }) => {

    console.dir("Data in the Banner" + fetchData.postResponse);
    const [data,setData]=useState(fetchData);

    useEffect(()=>{
      
        setData(fetchData);

    }
    ,[fetchData])

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
                            postResponse.data.filter(post => post.property === "house").slice(0,8)
                            .map((post) => (
                                <SmallCard key={post.id} item={post} animation="flip-up" />
                            ))  
                        }
                    </Await>
                </Suspense>
            </div>
        </div>
    );
}

const Banner3 = ({ title, fetchData }) => {

    console.dir("Data in the Banner" + fetchData.postResponse);
    const [data,setData]=useState(fetchData);

    useEffect(()=>{
      
        setData(fetchData);

    }
    ,[fetchData])

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
                            postResponse.data.filter(post => post.property === "land").slice(0,8)
                            .map((post) => (
                                <SmallCard key={post.id} item={post} animation="flip-up" />
                            ))  
                        }
                    </Await>
                </Suspense>
            </div>
        </div>
    );
}

export {Banner1,Banner2,Banner3};
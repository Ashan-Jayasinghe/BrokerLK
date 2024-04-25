import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import apiRequest from "../../lib/apiRequest";

function ListPage() {
  const data = useLoaderData();
  const [postData,setPostData] = useState();
  console.log("This is my data" + data.postResponse);

  useEffect(() => {
    const fetchData =  async(req,res) => {
      try{
      const res = await apiRequest.post("/posts/filterpost");
      setPostData(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  }, []);


  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter postData={postData}/>
          {/* <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense> */}
        </div>
      </div>
      <div className="mapContainer">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading posts!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default ListPage;

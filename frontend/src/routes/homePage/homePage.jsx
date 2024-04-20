import { Suspense, useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
import Card from "../../components/card/Card";
import { Await, useLoaderData } from "react-router-dom";

function HomePage() {
  const { currentUser } = useContext(AuthContext);
  const data = useLoaderData();
  
  return (
    <>
      <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">
              Find Your Perfect Home: Explore House Rentals
            </h1>
            <p>
              Welcome to BrokerLK - your go-to destination for hassle-free house
              rentals. Browse our extensive listings with ease and find the
              perfect home that fits your lifestyle. Start your search now and
              discover your next rental adventure!
            </p>
            <SearchBar />
            <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
              </div>
              <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
              </div>
              <div className="box">
                <h1>2000+</h1>
                <h2>Property Ready</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src="/bg.png" alt="" />
        </div>
      </div>
      <div className="homepagecontent">
        <div className="title">
        <span>
        <hr/>
        <h1>YourBroker Latest Boarding Places</h1>
        <hr/>
        </span>
        </div>
        <Suspense fallback={<p>Loading...</p>}>
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
        </Suspense>
      </div>
    </>
  );
}

export default HomePage;

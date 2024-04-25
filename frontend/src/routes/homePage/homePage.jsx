import { Suspense, useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
import Card from "../../components/card/Card";
import { Await, useLoaderData } from "react-router-dom";
import SmallCard from "../../components/smallCard/smallCard";
import Footer from "../../components/Footer/Footer";
import {Banner1,Banner2,Banner3} from "../../components/Banner/Banner";


function HomePage() {
  const { currentUser } = useContext(AuthContext);
  const data = useLoaderData();
  
  console.log('data',data);

  return (
    <>
      <div className="homePage" data-aos="fade-up">
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
        <Banner1 title="YourBroker Latest Boarding Rooms" fetchData={data} />
        <Banner2 title="YourBroker Latest Rental Houses" fetchData={data} />
        <Banner3 title="YourBroker Latest Selling Houses" fetchData={data} />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;

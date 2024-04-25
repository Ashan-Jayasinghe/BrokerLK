import { useEffect, useState } from "react";
import "./filter.scss";
import { useSearchParams } from "react-router-dom";
import Card from "../card/Card";

function Filter({postData}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterData,setfilterData]=useState(postData);
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property:searchParams.get("property") || "",
    minPrice: parseInt(searchParams.get("minPrice") )|| 0,
    maxPrice: parseInt(searchParams.get("maxPrice")) || 10000000,
    bedroom: 0,
  });

  const minPrice = query.minPrice;
  console.log("minPrice",query.minPrice);
  const district = query.city;
  const queryslide = query;
  console.log(queryslide);

  const filteringData =(posts)=>{
    if(Array.isArray(postData)){
      setfilterData(postData.filter((data)=>{
        return(
          ((data.city.toLowerCase().includes(posts.city.toLowerCase())) || data.address.toLowerCase().includes(posts.city.toLowerCase() || data.title.toLowerCase().includes(posts.title.toLowerCase()))) &&
          (data.type.includes(posts.type)) && 
          (data.property.includes(posts.property)) && (data.price >= posts.minPrice) && (data.price <= posts.maxPrice) && (data.bedroom >= posts.bedroom)
         
        )
      }))
    }
  }
  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };

  useEffect(()=>{
    setfilterData(postData);
    filteringData(query);

  },[postData,query])

  console.log("postdata",postData);
  console.log("filterdata",filterData);
  return (
    <>
    <div className="filter">
      <h1>
        Search results for <b>{searchParams.get("city")}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            onChange={handleChange}
            defaultValue={query.city}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            defaultValue={query.type}
          >
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select
            name="property"
            id="property"
            onChange={handleChange}
            defaultValue={query.property}
          >
            <option value="">any</option>
            <option value="apartment">Boarding Building</option>
            <option value="condo">Boarding Room</option>
            <option value="house">Rental House</option>
            <option value="land">Selling House</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.minPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.maxPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="number"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.bedroom}
          />
        </div>
        <button onClick={handleFilter}>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
      {Array.isArray(filterData) ?  filterData.map(filter=>(
        <Card key={filter.id} item={filter}/>
      )):
      <p>No Records Available</p>}
    </>
  );
}

export default Filter;

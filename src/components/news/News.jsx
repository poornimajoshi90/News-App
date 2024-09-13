import React, { useEffect, useState } from "react";
import "./News.css";

const News = ({ category }) => {
  const [mynews, setMyNews] = useState([]);
  const fetchData = async () => {
    let response =
      await fetch( "https://gnews.io/api/v4/top-headlines?category=general&category=${category}&apikey=8eb0bd4a59efce926a7dc1fd8c7a1c6f");
    let data = await response.json();
    setMyNews(data.articles)
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <>
      <h2 className="text-center">
        Latest<span className="badge bg-danger">News</span>
      </h2>

      <div className="mainDiv">
        {mynews.map((ele) => {
          console.log(ele);
          return (
            <>
              <div
                className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2 "
                style={{
                  width: "400px",
                  height: "500px",
                  margin: "0 auto",
                  marginLeft: "2rem",
                  marginTop: "2rem",
                }}
              >
                <img
                  src={
                    ele.image == null
                      ? "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                      : ele.image
                  }
                  style={{ height: "250px", width: "370px" }}
                  className="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title"> {ele.title.slice(0, 50)}</h5>
                  <p class="card-text">
                    {ele.description.substring(0, 100) + "..."}
                  </p>
                  <a href={ele.url} target="_blank" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default News;

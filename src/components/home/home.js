import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="App">
      <div className="home">
        <img className="bg" alt="artist pallete" />
        <div className="textContainer">
          <h2 className="heading">🏠 Home 🏠</h2>
          <h3>Hi 👋</h3>
          <p className="text">
            During my time at School of Code we were shown Canvas. I enjoyed
            making pictures as it proved to be a good stress reliever, sometimes
            SoC can get a bit overwhelming (no offense meant, its still a fun
            course).
          </p>
          <p className="text">
            After lots of playing I found a blog which showed how to make them
            responsive to screen size 🥳
          </p>
          <p className="text">
            If you want to see them visit the different pictures in the nav 😃
          </p>
          <p className="text">👍 Hope you like them I had fun making them</p>
          <p className="text">
            (I still have a small issue with the scaling so some are a bit fussy{" "}
            <br></br>
            😵 when full screen)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

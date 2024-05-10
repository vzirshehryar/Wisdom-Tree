import React from "react";

const Hero = () => {
  return (
    <div
      style={{ marginTop: "70px;", marginBottom: "70px;" }}
      className="simple-html-rendering "
      id=""
    >
      <h1>Welcome to the Future of Investing</h1>
      <p>&nbsp;</p>
      <div>
        <span
          style={{
            fontWeight: "300;",
            lineHeight: "24px;",
            fontFamily: "avenir, sans-serif;",
            fontSize: "18px;",
          }}
        >
          In June 2006, WisdomTree launched with a big idea and an impressive
          mission—to create a better way to invest.{" "}
        </span>
      </div>
      <div>
        <span
          style={{
            fontWeight: "300;",
            lineHeight: "24px;",
            fontFamily: "avenir, sans-serif;",
            fontSize: "18px;",
          }}
        >
          We believe investors shouldn’t have to choose between cost efficiency
          and performance potential, so we developed the first family of ETFs
          designed to deliver both. Today, we call this approach{" "}
          <span
            className="info-tooltip"
            data-original-title="Modern Alpha® combines the outperformance potential of active with the benefits of passive—to offer investor strategies that are built to perform. "
          >
            Modern Alpha
          </span>
        </span>
        <sup>
          ®
          <span
            style={{
              fontWeight: "300;",
              lineHeight: "24px;",
              fontFamily: "avenir, sans-serif;",
              fontSize: "18px;",
            }}
          >
            .
          </span>
        </sup>
      </div>
      <div
        className=""
        style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        <img
          style={{ width: "100%", maxWidth: "1140px" }}
          src="https://www.wisdomtree.com/investments/-/media/us-media-files/banners/modern-alpha-hp-banner-2024.png?h=416&iar=0&w=1140&hash=7D1F47284601CECBA54E133A6E9669CA"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Hero;

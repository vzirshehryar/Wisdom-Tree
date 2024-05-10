import React from "react";

const Second = () => {
  return (
    <div>
      <div
        style={{ paddingBottom: "70px;" }}
        className="simple-html-rendering "
        id=""
      >
        <h2>
          <span
            style={{
              fontSize: "30px;",
              lineHeight: "40px;",
              fontFamily: "avenir, sans-serif;",
            }}
          >
            The Benefits of Modern Alpha<sup>®</sup>
          </span>
        </h2>
        <p>
          <span
            style={{
              fontWeight: "300;",
              lineHeight: "20px;",
              fontFamily: "avenir, sans-serif;",
            }}
          >
            In comparison to traditional{" "}
            <span
              className="info-tooltip"
              data-original-title="Passive: Indexes that take a rules-based approach with regular rebalancing schedules that are not changed due to market conditions."
            >
              passive
            </span>{" "}
            investing,{" "}
            <span
              className="info-tooltip"
              data-original-title="Active: Funds that attempt to outperform the market by selecting securities a portfolio manager believe to be the best."
            >
              active management
            </span>{" "}
            (or “legacy{" "}
            <span
              className="info-tooltip"
              data-original-title="Alpha: Can be discussed as both risk-adjusted excess return relative to a specific benchmark, or absolute excess return relative to a benchmark. It is sometimes more generally referred to as excess returns in general."
            >
              alpha
            </span>
            ”) often carries higher cost, less transparency in your portfolio
            and the risk of human judgment. But it can also mean an
            outperformance potential. Modern Alpha
            <span style={{ fontSize: "12px;" }}>
              <sup>®</sup>
            </span>
             combines the positives of the passive and active investment
            approaches to enhance the investment experience.
          </span>
        </p>
      </div>
      <div
        style={{ paddingBottom: "100px;" }}
        className="image-callout-container row "
        id=""
      >
        {" "}
        <div className="col-xs-12 col-md-7">
          <div className="image-callout-media-title">
            What is Modern Alpha<sup>®</sup>?
          </div>
          <div>
            <div
              className="embeded-video poster embed-responsive embed-responsive-16by9"
              style={{
                backgroundImage:
                  "url(&#39;https://www.wisdomtree.com/investments/-/media/us-media-files/home/jeremy-siegel-homepage-modernalpha-desktop-copy.jpg&#39;);",
              }}
            >
              <video
                controls
                className="embed-responsive-item"
                title="What is Modern Alpha&lt;sup&gt;&#174;&lt;/sup&gt;?"
              >
                <source
                  src="https://www.wisdomtree.com/investments/-/media/us-media-files/multimedia/videos/siegel-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-5 image-callout-right-inner-container">
          <div className="image-callout-title">
            WisdomTree’s Modern Alpha<sup>®</sup> ETFs offer the potential for:
          </div>
          <div className="image-callout-list-items-container">
            <div className="image-callout-list-item">
              Enhanced portfolio returns
            </div>
            <div className="image-callout-list-item">
              Increased dividend income
            </div>
            <div className="image-callout-list-item">
              Reduced portfolio{" "}
              <span
                className="info-tooltip"
                title="Volatility: A measure of the dispersion of actual returns around a particular average level."
              >
                volatility
              </span>{" "}
              and risk
            </div>
            <div className="image-callout-list-item">
              More efficient exposure to{" "}
              <span
                className="info-tooltip"
                title="Risk premium: Equity investments are not risk free, but it is thought that investors buy stocks because the returns they expect are high enough to allow them to take the risk. "
              >
                risk premiums
              </span>
            </div>
          </div>
          <div className="image-callout-cta-button">
            <a
              className=" button -full"
              href="https://www.wisdomtree.com/investments/modern-alpha"
            >
              Learn about Modern alpha&#174;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;

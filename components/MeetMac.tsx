import React from "react";

const MeetMac = () => {
  return (
    <div
      style={{
        background: "#f4f4f4;",
        paddingTop: "70px;",
        paddingBottom: "70px;",
        paddingRight: "25px;",
        marginTop: "50px",
      }}
      className="video-highlight "
      id=""
    >
      {" "}
      <div className="container">
        <div className="row">
          <div
            id="video-highlight-text-image-fe07f987974a41c29721a33be930b71c"
            className="col-xs-12 col-sm-6 col-md-4 col-md-offset-1 video-highlight-text "
          >
            <div className="video-highlight-eyebrow"></div>
            <div className="video-highlight-title">
              <h2 className="title">Meet MAC</h2>
            </div>
            <div className="video-highlight-description">
              <p>
                The WisdomTree Model Adoption Center offers tools that help
                advisors understand, apply, tailor and communicate the benefits
                of model portfolios for their clients.
              </p>

              <div
                id="video-highlight-buttons-fe07f987974a41c29721a33be930b71c"
                className="video-highlight-button"
              >
                <a
                  className="button -secondary"
                  title="Alternate text"
                  href="https://www.wisdomtree.com/investments/mac"
                >
                  VISIT THE MAC
                </a>
              </div>
            </div>
          </div>
          <div
            id="video-highlight-media-container-fe07f987974a41c29721a33be930b71c"
            className="col-xs-12 col-sm-6 col-md-6 col-md-offset-1 video-highlight-media-container"
          >
            <div
              className="embeded-video poster embed-responsive embed-responsive-16by9 posterPlayBtn"
              style={{
                backgroundImage:
                  "url(&#39;https://www.wisdomtree.com/investments/-/media/us-media-files/multimedia/videos/posters/mac-video-poster1.jpg&#39;); min-height: 400px;",
              }}
            >
              <div className=" hidden">
                <img
                  alt="Play Icon"
                  src="https://www.wisdomtree.com/investments/-/media/base-media-files/icons/playicon2x-1.png"
                />
              </div>
              <video
                controls
                className="embed-responsive-item"
                title='&lt;h2 className="title"&gt;Meet MAC&lt;/h2&gt;'
              >
                <source
                  src="https://www.wisdomtree.com/investments/-/media/us-media-files/multimedia/videos/mac-tour-snapshot_final.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetMac;

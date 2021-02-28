import React from "react";

function WundrCreator() {
  return (
    <div>
      <div
        id="carouselControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div>
              <div className="row project-image-container align-items-center">
                <img
                  className="col"
                  src="images/wundr-creator.png"
                  height="560px"
                  width="300px"
                  alt=""
                />
                <div className="col project-name">
                  <h2>Wundr Creator App</h2>
                </div>
              </div>
            </div>
          </div>
          {/* +++++++++++ First image slide: ++++++++++++++++++ */}
          <div className="carousel-item">
            <div className="row project-image-container">
              <div className="col">
                <img
                  src="images/wundr-creator/wundr-know-audience.png"
                  height="540px"
                  width="300px"
                  alt=""
                />
              </div>
              <div className="col">
                <img
                  src="images/wundr-creator/wundr-monetize.png"
                  height="540px"
                  width="300px"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* +++++++++++ Second image slide: ++++++++++++++++++ */}
          <div className="carousel-item">
            <div className="row project-image-container">
              <div className="col">
                <img
                  src="images/wundr-creator/wundr-organize.png"
                  height="540px"
                  width="300px"
                  alt=""
                />
              </div>

              <div className="col">
                <img
                  src="images/wundr-creator/wundr-track-engagement.png"
                  height="540px"
                  width="300px"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* +++++++++++ Second image slide: ++++++++++++++++++ */}
          <div className="carousel-item">
            <div className="row project-image-container">
              <div className="col">
                <img
                  src="images/wundr-creator/wundr-segments.png"
                  height="540px"
                  width="300px"
                  alt=""
                />
              </div>
              <div className="col">
                <img
                  src="images/wundr-creator/wundr-overview.png"
                  height="540px"
                  width="300px"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="project-page-text-box">
        <h1>Wundr Creator App</h1>
        <p>
          This app was the second product developed by my start-up Wundr (after
          the community app). It was focused on online content creators in
          fitness, education and self-improvement, who could package their
          content into paid challenges for their audience.
        </p>
        <p>Features of the App include:</p>
        <br />
        <strong>Monetized challenges and content:</strong>
        <p>
          Creators could package their content into paid challenges, offered at
          different price points. In these challenges, creators could share
          their lifestyle, give tasks and tips to their audience and share
          special content.
        </p>
        <br />
        <strong>Chats:</strong>
        <p>
          When a user joined a challenge, they automatically got access to a one
          on one chat with the creator. In the chat they could send messages,
          images, videos and files and the creator could hold the participant
          accountable.
        </p>
        <br />
        <strong>Audience statistics and segmentation:</strong>
        <p>
          Creators would see detailed overviews and statistics of their audience
          and challenge participants. They couldsee who their top fans are,
          track the progress of each participant, see a feedback overview, how
          activity changed over time and how often tasks were completed.
        </p>
        <br />
        <strong>Content Calendar:</strong>
        <p>
          Both Creators and participants had content calendars to track their
          challenges. Participants had a calendar to track their progress and
          have an overview of their tasks and the creator's content in a
          story-format. The creator's calendar gave them a more organized view
          of current and planned content, custom reminders and the tasks of
          their challenges.
        </p>
        <br />
        <br />
        <br />
        <p>
          Also see the landing page I built for this app:{" "}
          <a href="https://danielnator.github.io/wundr-landing-page/index.html">
            Wundr Landing Page
          </a>
        </p>
      </div>
    </div>
  );
}

export default WundrCreator;

import React from "react";

function WundrCommunity() {
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
                  src="images/wundr-main.png"
                  height="520px"
                  width="450px"
                  alt=""
                />
                <div className="col project-name">
                  <h2>Wundr Community App</h2>
                </div>
              </div>
            </div>
          </div>
          {/* +++++++++++ First image slide: ++++++++++++++++++ */}
          <div className="carousel-item">
            <div className="row project-image-container">
              <div className="col">
                <img
                  src="images/wundr-community/wundr-feed.png"
                  height="540px"
                  width="300px"
                  alt=""
                />
              </div>
              <div className="col">
                <img
                  src="images/wundr-community/wundr-gallery.png"
                  height="540px"
                  width="300px"
                  alt=""
                />
              </div>
              <div className="col">
                <img
                  src="images/wundr-community/wundr-welcome.png"
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
                  src="images/wundr-community/wundr-calendar-1.png"
                  height="540px"
                  width="300px"
                  alt=""
                />
              </div>
              <div className="col">
                <img
                  src="images/wundr-community/wundr-calendar-2.png"
                  height="540px"
                  width="300px"
                  alt=""
                />
              </div>
              <div className="col">
                <img
                  src="images/wundr-community/wundr-congrats.png"
                  height="540px"
                  width="300px"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* +++++++++++ Third image slide: ++++++++++++++++++ */}
          <div className="carousel-item">
            <div className="row project-image-container">
              <div className="col">
                <img
                  src="images/wundr-community/wundr-side-menu.png"
                  height="540px"
                  width="300px"
                  alt=""
                />
              </div>
              <div className="col">
                <img
                  src="images/wundr-community/wundr-category-challenges.png"
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
        <h1>Wundr Community App</h1>
        <p>
          This app was the product of my start-up Wundr and scaled to 300 users
          in public beta. It was written in Flutter and available on both
          Android and IOS. The App was developed over a period of 6 months with
          the help of lots of user feedback. It went through multiple redesigns
          and code refactorings. It had dozens of fully functioning features,
          used Bloc state management, offered signin with Google or Facebook,
          used multiple APIs (including Algolia search, Google Maps, Google
          Places) and used Firebase for backend services, including the
          Firestore database and push notifications.
        </p>
        <p>Features of the App include:</p>
        <br />
        <strong>User Posts and Feed:</strong>
        <p>
          Users could make posts with text, images and videos. The posts had to
          be linked to a challenge and users could also share when they
          started/finished a challenge. Posts appear in the friend's feed, the
          feed of the challenge and the location feed if a location was
          provided. Posts could also be liked, commented and shared to other
          apps on the phone.
        </p>
        <br />
        <strong>Task Management Calendar:</strong>
        <p>
          The task management calendar provided the tools to keep track of the
          challenges a user joined. View of the calendar could be changed
          between week, 2-weeks and month, and for each day all tasks of
          challenges could be viewed and checked off. Furthermore, single tasks
          could be rescheduled to a certain time, "frozen" (in order to not
          loose the current streak) or have a custom push notfication as a
          reminder.
        </p>
        <br />
        <strong>Stories:</strong>
        <p>
          Users could post stories which would disappear after 24h. Friends
          could then send messages or reactions to these.
        </p>
        <br />
        <strong>Progress Tracking:</strong>
        <p>
          Checking off all tasks for a day would build a streak. Besides this
          overall streak, each challenge would also have its own streak. If a
          user could not complete a specific task, they had the option to
          "freeze" a day and miss a day without the streak being broken.
          Furthermore, challenges which were measurable (such as for time or
          distance) would have progress bars and statistics.
        </p>
        <br />
        <strong>Private Groups:</strong>
        <p>
          Users could join challenges in public, in private or in a private
          groups. The purpose of private groups was to have a goup of friends
          hold each other accountable. The group was a mix of chat and feed and
          also had leaderboards for each of its challenges.
        </p>
        <br />
        <strong>Chats:</strong>
        <p>
          Users could open 1 on 1 or group chats and send text messages, images,
          videos and share challenges into the chat.
        </p>
        <br />
        <strong>Challenge Creation and Gallery:</strong>
        <p>
          As a user-generated content platform, each user could create their own
          challenge. In a very detailed process, they could write descriptions,
          add images and create custom schedules of tasks (E.g. every second day
          do X, every Monday do Y, etc.). All challenges would appear in out
          Netflix-style gallery of challenges, order by popularity and challenge
          categories.
        </p>
      </div>
    </div>
  );
}

export default WundrCommunity;

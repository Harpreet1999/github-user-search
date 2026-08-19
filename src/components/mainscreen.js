import React, { useState } from "react";
import sample_cat from "../assets/images/sample.png";
import axios from "axios";
import Moment from "react-moment";
export const MainScreen = () => {
  const [isLight, setIsLight] = useState(false);
  const [user, setUser] = useState("octocat");
  const [userData, setUserData] = useState([]);

  const search_user = (username) => {
    axios.get(`https://api.github.com/users/${username}`).then((response) => {
      setUserData(response.data);
    });
  };
  console.log("userdata", userData);

  return (
    <div
      className={
        isLight === true ? "main_body light_theme flexie" : "main_body flexie"
      }
    >
      <div className="main_container">
        <div className="header flexie">
          <h3>devfinder</h3>
          <div className="theme_btn flexie">
            <button
              className="light_dark"
              onClick={() => {
                setIsLight(!isLight);
              }}
            >
              {isLight === true ? "DARK" : "LIGHT"}
            </button>
            <span className="icon">
              {isLight === true ? (
                <i className="fas fa-moon"></i>
              ) : (
                <i className="fas fa-sun"></i>
              )}
            </span>
          </div>
        </div>
        <div className="search_bar flexie">
          <span className="icon">
            <i className="fas fa-search"></i>
          </span>
          <input
            type="text"
            placeholder="Search GitHub username..."
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />

          <button type="sumbit" onClick={() => search_user(user)}>
            Search
          </button>
        </div>
        <div className="search_result flexie">
          <div className="img_contain">
            <img
              src={
                userData.avatar_url ? `${userData.avatar_url}` : `${sample_cat}`
              }
              alt="user"
            />
          </div>
          <div className="results">
            <div className="basic_info">
              <div className="name_block flexie">
                <h1>{userData.name ? `${userData.name}` : "Not Available"}</h1>
                <p className="date">
                  Joined &nbsp;
                  <Moment format="DD MMM YYYY">{userData.created_at}</Moment>
                </p>
              </div>
              <a className="profile_link" href={userData.html_url}>
                {userData.html_url ? `@${userData.login}` : "Not Available"}
              </a>
              <p className="bio">
                {userData.bio ? `${userData.bio}` : "This profile has no bio."}
              </p>
            </div>
            <div className="stats flexie">
              <div className="stat">
                <p className="head">Repo</p>
                <p className="value">
                  {userData.public_repos ? `${userData.public_repos}` : "0"}
                </p>
              </div>
              <div className="stat">
                <p className="head">Followers</p>
                <p className="value">
                  {userData.followers ? `${userData.followers}` : "0"}
                </p>
              </div>
              <div className="stat">
                <p className="head">Follwing</p>
                <p className="value">
                  {userData.following ? `${userData.following}` : "0"}
                </p>
              </div>
            </div>
            <div className="links flexie">
              <div className="link">
                <span className="icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <p className="link_text">
                  {userData.location
                    ? `${userData.location}`
                    : "Not Available"}
                </p>
              </div>
              <div className="link">
                <span className="icon">
                  <i className="fa-solid fa-link"></i>
                </span>
                <p className="link_text">
                  {userData.blog ? (
                    <a href={userData.blog} target="_blank" rel="noreferrer">
                      {userData.blog}
                    </a>
                  ) : (
                    "Not Available"
                  )}
                </p>
              </div>
              <div className="link">
                <span className="icon">
                  <i className="fa-brands fa-twitter"></i>
                </span>
                <p className="link_text">
                  {userData.twitter_username
                    ? `${userData.twitter_username}`
                    : "Not Available"}
                </p>
              </div>
              <div className="link">
                <span className="icon">
                  <i className="fa-solid fa-building"></i>
                </span>
                <p className="link_text">
                  <a
                    href={
                      userData.organization_url
                        ? `${userData.organization_url}`
                        : "Not Available"
                    }
                  >
                    {userData.company ? `${userData.company}` : "Not Available"}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

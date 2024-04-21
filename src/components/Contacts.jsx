import React from "react";
import { IMAGE_URL } from "../Data/Constants";

const Contacts = () => {
  return (
    <div id="contact" className="contact">
      <div className="title">
        <h3>
          <span>C</span>ontact <span>M</span>e
        </h3>
      </div>

      <div className="contact-container">
        <div>
          <div className="contact-info">
            <span className="head"> GET IN TOUCH</span>
            <div className="media">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>

              <span>
                <a
                  href="mailto:goodam198@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  mail me
                </a>
              </span>
            </div>
            <div className="media">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon"
              >
                <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                <path
                  fillRule="evenodd"
                  d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>+255 684 116 567</span>
            </div>
          </div>

          <div className="media-info">
            <div className="media-icon">
              <a
                href="https://www.linkedin.com/in/goodluck-mlungusye-901963214/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`${IMAGE_URL}/linkedin.png`}
                  alt="in"
                  className="linkedin"
                />
              </a>
            </div>

            <div className="media-icon">
              <a
                href="https://github.com/GoodluckMlungusye/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`${IMAGE_URL}/github.png`}
                  alt="git"
                  className="github"
                />
              </a>
            </div>
          </div>
        </div>

        <div>
          <button className="cv">
            <span>Download CV</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.25 6a.75.75 0 0 0-1.5 0v4.94l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V9.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

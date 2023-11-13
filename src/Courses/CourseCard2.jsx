import React from "react";
import "./../Courses/CourseCard.css";
function CourseCard2() {
  return (
    <div>
      <div class="plan max-md:mx-auto">
        <div class="inner">
          <span class="pricing">
            <span>₹120</span>
          </span>
          <p class="title">Spoken English</p>
          <p class="info">
          Master the art of spoken English and open doors to global communication, enabling you to express yourself confidently
          </p>
          <ul class="features">
            <li>
              <span class="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>
                <strong>Practical </strong>Daily Life Application
              </span>
            </li>
            <li>
              <span class="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>
                Conversational<strong> Practice</strong>
              </span>
            </li>
            <li>
              <span class="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>Easy to learn Course Content</span>
            </li>
          </ul>
          <div class="action">
            <a class="button" href="#">
              Start Learning
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard2;

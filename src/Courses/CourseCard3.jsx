import React from "react";
import "./../Courses/CourseCard.css";
function CourseCard3() {
  return (
    <div>
      <div class="plan max-md:mx-auto">
        <div class="inner">
          <span class="pricing">
            <span>₹120</span>
          </span>
          <p class="title">Personality Development</p>
          <p class="info">
          Unlock your full potential through this personality development course and bring out a more polished version of yourself.
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
                <strong>Real Life</strong> Scenarios
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
                Positive <strong>Habit Formation</strong>
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
              <span>Stress Management</span>
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

export default CourseCard3;

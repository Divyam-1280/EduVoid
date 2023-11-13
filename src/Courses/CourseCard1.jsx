import React from 'react'
import './../Courses/CourseCard.css'
function CourseCard1() {
  return (
    <div>
        <div class="plan max-md:mx-auto">
		<div class="inner">
			<span class="pricing">
				<span>
                    ₹120
				</span>
			</span>
			<p class="title">Web Development</p>
			<p class="info">Dive into web development, where creativity meets innovation, allowing you to shape the digital world and bring your ideas to life</p>
			<ul class="features">
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span><strong>Hours</strong> of learning content</span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>Make <strong>Real Life Project</strong></span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>Master the Basics</span>
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
  )
}

export default CourseCard1
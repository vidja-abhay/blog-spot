import React from 'react';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black'>
      <div className='max-w-2xl mx-auto p-6 text-center'>
        <div>
          <h1 className='text-3xl font-semibold text-center my-7 text-black dark:text-white'>
            About Our Blog
          </h1>
          <div className='text-md text-gray-700 flex flex-col gap-6 dark:text-white'>
            <p>
              Welcome to Our Blog! This blog is dedicated to providing valuable
              insights and knowledge on various topics related to web development,
              software engineering, and programming languages.
            </p>

            <p>
              Our mission is to empower developers and enthusiasts with informative
              articles and tutorials, helping them stay updated with the latest trends
              and advancements in the tech industry.
            </p>

            <p>
              Feel free to explore our blog and discover a wealth of resources that
              can aid you in your learning journey. Don't forget to engage with our
              community by leaving comments, sharing your thoughts, and interacting
              with fellow readers. Together, let's foster a culture of learning and
              collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

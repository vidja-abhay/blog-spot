import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import home from '../assets/HOME.jpg';
import { Button } from 'flowbite-react';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className='container min-h-800 px-28 py-6 relative'>
        <div className='text-center lg:text-left'>
          <h1 className='text-3xl lg:text-6xl font-bold leading-normal mt-20 mb-4'>Blog Spot</h1>
          <p className='text-base text-gray-700 mb-6 dark:text-white'>
            Welcome to Blog Spot, your go-to destination for insightful articles,
            informative tutorials, and captivating stories. <br /> Explore the world of ideas with us and join our community of passionate readers and writers today.
          </p>
          <Link to='/search'>
            <Button type='button' className='bg-cyan-700'>
              View all posts
            </Button>
          </Link>
        </div>
        <img src={home} alt="" className='w-full lg:w-1/4 lg:absolute top-10 right-28 rounded-lg mt-10' />
        <div className='mb-18 xl:mb-48'></div>
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link to={'/search'} className='text-lg text-teal-500 hover:underline text-center'>
            <Button type='button' className='bg-cyan-700'>
              View all posts
            </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

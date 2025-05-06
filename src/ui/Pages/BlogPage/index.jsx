import React, { useState, useMemo } from 'react';
import blog from '../../../assets/Images/blog.jpg';
import UseFetch from '../../../hooks/UseFetch.jsx';
import { useSearchParams } from 'react-router-dom';

const BlogPage = () => {
  const [searchParams] = useSearchParams();
  const { data: blogPosts, isLoading } = UseFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/blogPosts?${searchParams.toString()}`
  );

  const [sortOrder, setSortOrder] = useState('sort'); 
  const getSortedPosts = () => {
    if (!blogPosts) return [];

    const sorted = [...blogPosts].sort((a, b) => {

      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      return sortOrder === 'asc' ? titleA.localeCompare(titleB) 
      : titleB.localeCompare(titleA);
    });

    return sorted;
  };

  const sortedPosts = getSortedPosts();
  return (
    <div className="max-w-[1120px] mx-auto">
      <div className="relative">
        <img
          src={blog}
          alt="Blog Hero"
          className="w-full h-80 md:h-full object-cover p-8"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold pb-4">Our Blog</h2>
          <p className="text-sm md:text-base">Home ideas and design inspiration</p>
        </div>
      </div>

      <div className="flex justify-end px-4 py-4">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded font-semibold"
        >
          <option value="sort" disabled>Sort By</option>

          <option value="asc">Sort A–Z</option>
          <option value="desc">Sort Z–A</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-6">
        {isLoading ? (
          <p className="col-span-full text-center text-lg">Loading...</p>
        ) : sortedPosts.length > 0 ? (
          sortedPosts.map((post, index) => {
            const imageUrl = `${import.meta.env.VITE_REACT_APP_API_URL}/${post.image}`;
            return (
              <div
                key={index}
                className="overflow-hidden shadow hover:shadow-md transition rounded"
              >
                <img src={imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="col-span-full text-center text-lg">No blog posts found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;

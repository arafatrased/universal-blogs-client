
import React from 'react';

const BlogCard = ({ title, image, description, category }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Blog Image */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />

      {/* Blog Content */}
      <div className="p-5">
        {/* Category Badge */}
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mb-2">
          {category}
        </span>

        {/* Blog Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

        {/* Short Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
            Details
          </button>
          <button className="text-red-500 hover:text-red-600 transition-colors text-xl">
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

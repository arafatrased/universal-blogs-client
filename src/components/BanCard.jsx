import React from 'react';

const BanCard = ({bandata}) => {
    const {imageUrl, title} = bandata;
    if(!bandata){
        return <h2>No data Available</h2>
    }
    return (
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="w-full object-cover blur-sm"
          />
          <div>
            <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
              Welcome to Universal Blog
            </h1>
          </div>
        </div>
    );
};

export default BanCard;
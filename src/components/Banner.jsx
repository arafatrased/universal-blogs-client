import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axioInstance/axiosInstance";


export function Banner() {
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    axiosInstance.get('/blogs/banner')
      .then(res => {
        setBannerData(res.data)
      })
  }, [])


  return (
    <div className="w-full h-[60vh]">
      <Carousel className="overflow-hidden">
        {bannerData.map(bandata => (<div key={bandata._id} className="relative">
          <img
            src={bandata.imageUrl}
            alt="image 1"
            className="w-full "
          />
          <div className="absolute text-center top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-orange-600 text-4xl font-bold">
              {bandata.title}
            </h1>
            <h2 className="text-white my-2">Category: {bandata.category}</h2>
            <Link to={`/details/${bandata._id}`} className='bg-orange-500 text-white mt-4 px-4 py-1 rounded-md '>Details</Link>

          </div>
        </div>

        ))}


      </Carousel>
    </div>
  );
}
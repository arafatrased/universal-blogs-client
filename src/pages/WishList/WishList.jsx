import React, { useEffect } from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import axiosInstance from '../../axioInstance/axiosInstance';


const WishList = () => {
  const { user } = useAuth();

  const [wishLists, setWishLists] = React.useState([]);

  useEffect(() => {
    axiosInstance.get(`/wishlist?email=${user.email}`)
    .then(res => {
      setWishLists(res.data);
    })
    .catch(err =>{
      console.log(err)
    })
  }, [user.email])



  const handleDelete = (id) => {
    axiosInstance.delete(`/wishlist/${id}`)
      .then((response) => {
        if (response.data.deletedCount === 1) {
          toast.success('Deleted successfully');
        }
        const newWishList = wishLists.filter((wish) => wish._id !== id);
        setWishLists(newWishList);
      }).catch((error) => {
        toast.error(error);
      });

  }
  const columns = [
    {
      header: 'Title',
      accessorKey: 'title',
      cell: info => info.getValue(),
    },
    {
      header: 'Category',
      accessorKey: 'category',
      cell: info => info.getValue(),
    },
    {
      header: 'Short Description',
      accessorKey: 'shortDescription',
      cell: info => info.getValue().split('.')[0], // Only the first sentence
    },
    {
      header: 'Image',
      accessorKey: 'imageUrl',
      cell: info => (
        <img
          src={info.getValue()}
          alt="Blog"
          className="h-12 w-12 object-cover rounded-md"
        />
      ),
    },
    {
      header: 'Details',
      cell: info => (
        <Link to={`/details/${info.row.original.wish_id}`}>
          <Button color="orange" variant="outlined" size="sm">
            Details
          </Button>
        </Link>
      ),
    },
    {
      header: 'Action',
      cell: info => (
        <Button
          color="red"
          size="sm"
          onClick={() => handleDelete(info.row.original._id)}
        >
          Delete
        </Button>
      ),
    },
  ];



  const table = useReactTable({
    data: wishLists,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Wish<span className='text-orange-700'>List</span></h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="bg-gray-100">
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="py-2 px-4 border-b text-left text-gray-700"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td
                    key={cell.id}
                    className="py-2 px-4 border-b"

                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishList;

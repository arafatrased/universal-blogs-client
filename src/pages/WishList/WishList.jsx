import React from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

import { Button } from '@material-tailwind/react';

const featuredData = [
  {
    "_id": "6772d4d78f5b407f2c4dc223",
    "email": "messi@gmail.com",
    "title": "Gamin Geeks in 2024",
    "imageUrl": "https://i.ibb.co.com/nDpdRgx/Beyh-Fd-CM2ug-LQj-X8v-X7fu-Q-1024-80-jpg.webp",
    "category": "Technology",
    "shortDescription": "Assertively visualize covalent e-tailers whereas just in time paradigms.",
  },
  {
    "_id": "6772d5668f5b407f2c4dc224",
    "email": "messi@gmail.com",
    "title": "Best Games on Running",
    "imageUrl": "https://i.ibb.co.com/gyZ8nPL/header.jpg",
    "category": "Education",
    "shortDescription": "Holisticly streamline proactive infrastructures rather than worldwide technology.",
  },
  {
    "_id": "6772d97f8f5b407f2c4dc225",
    "email": "",
    "title": "Front-End Developer",
    "imageUrl": "https://i.ibb.co.com/nDpdRgx/Beyh-Fd-CM2ug-LQj-X8v-X7fu-Q-1024-80-jpg.webp",
    "category": "Education",
    "shortDescription": "Competently cultivate resource sucking 'outside the box'.",
  }
];

const columns = [
  {
    header: 'Title',
    accessorKey: 'title',
    cell: info => info.getValue(),
  },
  {
    header: 'Email',
    accessorKey: 'email',
    cell: info => info.getValue() || 'N/A',
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
    isPlaceholder: true,
    cell: info => (
      <Button color="orange" variant='outlined' size="sm">
        Details
      </Button>
    ),
  },
  {
    header: 'Action',
    isPlaceholder: true,
    cell: info => (
      <Button color="red" size="sm">
        Delete
      </Button>
    ),
  },
];

const WishList = () => {
  const table = useReactTable({
    data: featuredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="container mx-auto p-4">
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

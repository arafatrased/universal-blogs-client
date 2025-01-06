import React, { useState } from 'react';
import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender } from '@tanstack/react-table';
import { useLoaderData } from 'react-router-dom';

const FeaturedPost = () => {
    const featData = useLoaderData()

    const [featuredData, setFeaturedData] = useState(featData);

    const handleChange = (e) => {
        const cateValue = e.target.value;
        const filteredData = featData.filter((data) => data.category === cateValue);
        setFeaturedData(filteredData);
    }

    const columns = [
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
            accessorKey: 'title',
            header: 'Title',
            cell: ({ row }) => (
                <span className="font-bold">{row.getValue('title')}</span>
            ),
        },
        // {
        //   header: 'Email',
        //   accessorKey: 'email',
        //   cell: info => info.getValue() || 'N/A',
        // },
        {
            header: 'Category',
            accessorKey: 'category',
            cell: info => info.getValue(),
        },
        {
            header: 'Short Description',
            accessorKey: 'shortDescription',
            cell: info => info.getValue().split('.')[0], // Display only one sentence
        },
    ];

    const table = useReactTable({
        data: featuredData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <div className="container mx-auto p-4 min-h-screen">
            <div className='sm:flex-col md:flex-row lg:flex-row justify-between items-center mb-4'>
                <h1 className="text-2xl text-center font-bold mb-4">Featured <span className='text-orange-700'>Posts</span></h1>
                <div>
                    <div className="flex items-center justify-center">
                        <label className="">
                            <span className=" font-bold">Sort By Categories</span>
                        </label>
                        <select onChange={handleChange} defaultValue="Pick a Job type" name="jobType" className="border-2 focus:border-2 border-orange-500 rounded-md p-2 ml-2">
                            <option disabled>Pick a Category</option>
                            <option>Technology</option>
                            <option>Health</option>
                            <option>Education</option>
                            <option>Travel</option>
                            <option>Lifestyle</option>
                        </select>
                    </div>
                </div>
            </div>
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
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {header.column.getIsSorted() === 'asc' ? ' 🔼' : header.column.getIsSorted() === 'desc' ? ' 🔽' : ''}
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

export default FeaturedPost;

'use client'

import { useState } from 'react'
import Drawer from '@/components/Drawer'
import JoinList from '@/components/JoinList'
import talentData from '../../../data/talentData'
import { FaFilter } from 'react-icons/fa'
import { FaStar, FaRegStar } from 'react-icons/fa'

export default function Hire () {
  const [filters, setFilters] = useState({
    role: '',
    experience: '',
    location: ''
  })

  const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false)

  const handleFilterChange = e => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const toggleMobileFilter = () => {
    setIsMobileFilterVisible(!isMobileFilterVisible)
  }
  const filteredData = talentData.filter(talent => {
    return (
      (filters.role === '' ||
        talent.role.toLowerCase().includes(filters.role.toLowerCase())) &&
      (filters.experience === '' ||
        (!isNaN(parseFloat(filters.experience)) &&
          parseFloat(talent.experience) >= parseFloat(filters.experience))) &&
      (filters.location === '' ||
        talent.location.toLowerCase().includes(filters.location.toLowerCase()))
    )
  })

  return (
    <div className='flex flex-col lg:flex-row min-h-screen bg-gradient-to-b from-indigo-500 to-pink-300 '>
      {/* Sidebar Drawer */}
      <Drawer />
      <JoinList />

      {/* Filter Section for Larger Screens */}
      <div className='hidden lg:block lg:w-1/4 w-full h-full lg:mt-36 ml-2 p-4 bg-white rounded-lg shadow-md'>
        <h2 className='text-xl font-semibold mb-6 text-gray-700'>Filters</h2>
        <div className='mb-6'>
          <label className='block text-sm font-medium mb-2 text-gray-600'>
            Role
          </label>
          <input
            type='text'
            name='role'
            value={filters.role}
            onChange={handleFilterChange}
            placeholder='e.g., Software Engineer'
            className='w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200'
          />
        </div>
        <div className='mb-6'>
          <label className='block text-sm font-medium mb-2 text-gray-600'>
            Experience
          </label>
          <input
            type='text'
            name='experience'
            value={filters.experience}
            onChange={handleFilterChange}
            placeholder='e.g., >3 years'
            className='w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200'
          />
        </div>
        <div className='mb-6'>
          <label className='block text-sm font-medium mb-2 text-gray-600'>
            Location
          </label>
          <input
            type='text'
            name='location'
            value={filters.location}
            onChange={handleFilterChange}
            placeholder='e.g., Bengaluru'
            className='w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200'
          />
        </div>
      </div>

      {/* Main Content */}
      <div className='lg:w-3/4 w-full p-4'>
        <h1 className='text-2xl sm:text-3xl text-center mt-10 mb-10 font-semibold text-gray-800'>
          Hire Talent
        </h1>

        {/* Mobile Filter Drawer */}
        <div className='lg:hidden flex justify-start mb-4'>
          <button
            onClick={toggleMobileFilter}
            className='text-xl p-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition'
          >
            <FaFilter />
          </button>
        </div>
        {isMobileFilterVisible && (
          <div className='block lg:hidden absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 z-10'>
            <div className='bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-20'>
              <h2 className='text-xl font-semibold mb-6'>Filters</h2>
              <div className='mb-6'>
                <label className='block text-sm font-medium mb-2'>Role</label>
                <input
                  type='text'
                  name='role'
                  value={filters.role}
                  onChange={handleFilterChange}
                  placeholder='e.g., Software Engineer'
                  className='w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200'
                />
              </div>
              <div className='mb-6'>
                <label className='block text-sm font-medium mb-2'>
                  Experience
                </label>
                <input
                  type='text'
                  name='experience'
                  value={filters.experience}
                  onChange={handleFilterChange}
                  placeholder='e.g., >3 years'
                  className='w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200'
                />
              </div>
              <div className='mb-6'>
                <label className='block text-sm font-medium mb-2'>
                  Location
                </label>
                <input
                  type='text'
                  name='location'
                  value={filters.location}
                  onChange={handleFilterChange}
                  placeholder='e.g., Bengaluru'
                  className='w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200'
                />
              </div>
              <button
                onClick={toggleMobileFilter}
                className='block w-full mt-4 bg-blue-500 text-white p-2 rounded shadow-md hover:bg-blue-600 transition'
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* Talent Table */}
        <table className='w-full  rounded-3xl bg-white  shadow-md'>
          <thead>
            <tr className=' text-gray-700'>
              <th className=' p-3'>Featured</th>
              {/* <th className=' p-3'>Votes</th> */}
              <th className=' p-3'>Name</th>
              <th className=' p-3'>Role</th>
              <th className=' p-3'>Experience</th>
              <th className=' p-3'>Location</th>
              <th className=' p-3'>Proof of Work</th>
              <th className=' p-3'>Social Link</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((talent, index) => (
              <tr
                key={index}
                className='odd:bg-gray-50 even:bg-white hover:bg-gray-100 transition'
              >
                <td className=' flex justify-center p-3'>
                  {talent.star ? <FaStar /> : <FaRegStar />}
                </td>
                {/* <td className='border border-gray-300 p-3'>{talent.upvotes}</td>   */}
                <td className='border border-gray-300 p-3'>{talent.name}</td>
                <td className='border border-gray-300 p-3'>{talent.role}</td>
                <td className='border border-gray-300 p-3 text-center'>
                  {talent.experience}
                </td>
                <td className='border border-gray-300 p-3'>
                  {talent.location}
                </td>
                <td className='border border-gray-300 p-3'>
                  <a
                    href={talent.proof_of_work_link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 underline'
                  >
                    Link
                  </a>
                </td>
                <td className='border border-gray-300 p-3'>
                  <a
                    href={talent.social_link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 underline'
                  >
                    Link
                  </a>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan='6' className='text-center p-4 text-gray-500'>
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

import React from 'react'
import Drawer from '@/components/Drawer'
import JoinList from '@/components/JoinList'
import CardComponent from '@/components/CardComponent'
import Link from 'next/link'
import profileData from '../../data/profileData'
import talentData from '../../data/talentData'
import Image from 'next/image'
import { FaStar, FaRegStar } from 'react-icons/fa'
import ResourceTable from '@/components/ResourceTable'

const data = profileData

const Home = () => {
  return (
    <>
      <Drawer />
      <JoinList />

      <div className='flex flex-col items-center justify-center min-h-screen overflow-hidden'>
        <div className='text-center'>
          <h1 className='text-lg md:text-3xl font-semibold text-gray-800 mt-10 mb-4'>
            The List
          </h1>
          <p className='text-sm md:text-lg text-gray-600 mb-8  sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto px-3'>
            Discover and explore opportunities to connect with talented
            individuals. The List is dedicated to fostering a community where
            everyone can showcase their skills, access resources, and build
            meaningful connections to fuel their success.
          </p>
        </div>
        <div id='fund'>
          <div className='block lg:hidden'>{mobile()}</div>
          <div className='hidden lg:block'>{notMobile()}</div>
        </div>

        <div id='hire' className=''>
          <div className='w-full px-4 flex justify-between items-center text-xl mt-4'>
            <div>
              <b>Hire</b>
            </div>
            <Link href='/hire'>
              <div>
                <u>Checkout Full List</u>
              </div>
            </Link>
          </div>

          <div className='w-full flex flex-wrap justify-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl shadow-2xl rounded-lg p-6 border border-gray-100'>
            {hireTable()}
          </div>
        </div>

        <div id='resources'>
          <div className='flex justify-between text-xl pl-2 mt-4'>
            <div>
              {' '}
              <b> Resources </b>
            </div>
          </div>
          <div
            className='w-full flex justify-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl 
      shadow-2xl rounded-lg p-6 border border-gray-100 bg-white'
            style={{ minHeight: '300px' }} // Ensures a uniform height
          >
            <ResourceTable />
          </div>
        </div>
      </div>
    </>
  )
}

const cardsData = [
  {
    name: 'Utkrisht Singh',
    building: 'Building InTacht',
    description:
      'InTacht (Intelligent Global Infrastructure), which is basically a modern Cloud Runtime that enables startups to efficiently create & manage their own AI infrastructure like GPU clusters and integrate modern AI chips or custom hardware like ASICs &  FPGAs.',
    pathToImage: '/images/utkrisht-singh/personImage.jpg',
    link:'/fund/utkrisht-singh'
  },
  {
    name: 'Akshay Kripalani',
    building: 'Building Proxima Mumbai',
    description: 'Proxima is a Mumbai based hyper-curated community of builders and founders alike. We host hackathons, demo days and co-working meetups. We are currently 50+ members strong with talented founders in the community, like Armaan Dhanda, Harsh Agarwal, and Dhravya Shah.',
    pathToImage: '/images/akshay-kripalani/personImage.jpg',
    link:'/fund/akshay-kripalani'
  },
  {
    name: 'Prashant Sharma',
    building: 'Building FutureX Society',
    description: '',
    pathToImage: '/images/prashant-sharma/personImage.jpeg',
    link:'/fund/prashant-sharma'
  } // Added pathToImage
]

function hireTable () {
  const filteredData = talentData
  return (
    <div className='overflow-x-auto w-full'>
      <table className='min-w-full bg-white shadow-md rounded-lg text-sm px-2'>
        <thead>
          <tr className='bg-gray-100 text-gray-700'>
            <th className='p-3 text-left'>Featured</th>
            <th className='p-3 text-left'>Name</th>
            <th className='p-3 text-left'>Role</th>
            <th className='p-3 text-left'>Experience</th>
            <th className='p-3 text-left'>Location</th>
            <th className='p-3 text-left'>Proof of Work</th>
            <th className='p-3 text-left'>Social Link</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((talent, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              } hover:bg-gray-100 transition`}
            >
              <td className='p-3 text-center'>
                {talent.star ? (
                  <FaStar className='text-yellow-500' />
                ) : (
                  <FaRegStar />
                )}
              </td>
              <td className='p-3'>{talent.name}</td>
              <td className='p-3'>{talent.role}</td>
              <td className='p-3 text-center'>{talent.experience}</td>
              <td className='p-3'>{talent.location}</td>
              <td className='p-3'>
                <a
                  href={talent.proof_of_work_link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 underline'
                >
                  Link
                </a>
              </td>
              <td className='p-3'>
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
              <td colSpan='7' className='text-center p-4 text-gray-500'>
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

function notMobile () {
  return (
    <>
      <div className='flex justify-between text-xl'>
        <div>
          {' '}
          <b>Fund/Support </b>
        </div>
        <Link href='/fund'>
          <div>
            {' '}
            <u> Checkout Full List </u>{' '}
          </div>
        </Link>
      </div>
      <div
        className='w-full flex flex-wrap justify-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl
      shadow-xl rounded-lg p-6 border border-gray-100'
      >
        {data.map(personDetails => {
          return (
            <div key={personDetails.key}>
              <Link href={`/fund/${personDetails.slug}`}>
                <CardComponent
                  name={personDetails.name}
                  buildingInfo={personDetails.buildingInfo}
                  cardSubContent={personDetails.cardSubContent}
                  bannerImage={personDetails.bannerImage}
                  profileImage={personDetails.profileImage}
                />
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

const SmallCard = ({ name, building, pathToImage, link }) => {
  return (
    <>
      <Link href={link}>
        <div className='flex items-center rounded-lg shadow-xl border border-gray-100  p-4 m-2 w-64'>
          <div className='w-12 h-12 rounded-full mr-4'>
            <Image
              src={pathToImage}
              alt={name}
              width={200}
              height={200}
              className='object-cover w-full h-full rounded-full'
            />
          </div>
          <div className='flex flex-col'>
            <div className='font-bold text-base'>{name}</div>
            <div className='text-sm text-gray-700'>{building}</div>
          </div>
        </div>
      </Link>
    </>
  )
}

function mobile () {
  return (
    <>
      <div className='flex justify-between text-lg px-2'>
        <div>
          {' '}
          <b>Fund/Support </b>
        </div>
        <Link href='/fund'>
          <div>
            {' '}
            <u> Checkout Full List </u>{' '}
          </div>
        </Link>
      </div>
      <div
        className='w-full flex flex-wrap justify-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl
      bg-gray-50 shadow-md rounded-lg p-6 border border-gray-100'
      >
        {cardsData.map((card, index) => (
          <SmallCard
            key={index}
            name={card.name}
            building={card.building}
            description={card.description}
            pathToImage={card.pathToImage}
            link={card.link}
          />
        ))}
      </div>
    </>
  )
}

export default Home

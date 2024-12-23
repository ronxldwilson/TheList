import React from 'react'
import Drawer from '@/components/Drawer'
import CardComponent from '@/components/CardComponent'
import Link from 'next/link'
import profileData from '../../data/profileData'
import Image from 'next/image'
import { FaStar, FaRegStar } from 'react-icons/fa'
import ResourceTable from '@/components/ResourceTable'

const data = profileData

const Home = () => {
  return (
    <>
      <Drawer />

      <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-gray-800 mt-4 mb-4'>
            The List
          </h1>
          <p className='text-sm text-gray-600 mb-8  sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto'>
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
          <div className='flex justify-between text-xl mt-4'>
            <div>
              {' '}
              <b> Hire </b>
            </div>
            <Link href='/hire'>
              <div>
                {' '}
                <u> Checkout Full List </u>{' '}
              </div>
            </Link>
          </div>
          <div className='w-full flex flex-wrap justify-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl shadow-2xl rounded-lg p-6 border border-gray-100'>
            {hireTable()}
          </div>
        </div>

        <div id='resources'>
          <div className='flex justify-between text-xl mt-4'>
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
    pathToImage: '/images/utkrisht-singh/personImage.jpg'
  },
  {
    name: 'Akshay Kripalani',
    building: 'Building Proxima Mumbai',
    description: '',
    pathToImage: '/images/akshay-kripalani/personImage.jpg'
  },
  {
    name: 'Mike Johnson',
    building: 'Building 3',
    description: 'Close to the park',
    pathToImage: ''
  } // Added pathToImage
]

function hireTable () {
  const filteredData = [
    {
      id: '000001',
      name: 'Placeholder Name',
      role: 'Software Engineer',
      experience: 5,
      location: 'Bengaluru',
      proof_of_work_link: 'https://fueler.io/ronxldwilson',
      social_link: 'https://linkdein.com/ronxldwilson',
      upvotes: 15,
      star: true,
      date_added: ''
    },
    {
      id: '000002',
      name: 'Placeholder Name',
      role: 'Software Engineer',
      experience: 1,
      location: 'Bengaluru',
      proof_of_work_link: 'https://fueler.io/ronxldwilson',
      social_link: 'https://linkdein.com/ronxldwilson',
      upvotes: 15,
      star: false,
      date_added: ''
    },
    {
      id: '000003',
      name: 'Placeholder Name',
      role: 'Content Writter',
      experience: 6,
      location: 'Bengaluru',
      proof_of_work_link: 'https://fueler.io/ronxldwilson',
      social_link: 'https://linkdein.com/ronxldwilson',
      upvotes: 15,
      star: true,
      date_added: ''
    }
  ]
  return (
    <>
      <table className='w-full  rounded-3xl bg-white  shadow-md'>
        <thead>
          <tr className=' text-gray-700'>
            <th className=' p-3'>Star</th>
            <th className=' p-3'>Votes</th>
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
              <td className='border border-gray-300 p-3'>
                {talent.star ? <FaStar /> : <FaRegStar />}
              </td>
              <td className='border border-gray-300 p-3'>{talent.upvotes}</td>
              <td className='border border-gray-300 p-3'>{talent.name}</td>
              <td className='border border-gray-300 p-3'>{talent.role}</td>
              <td className='border border-gray-300 p-3'>
                {talent.experience}
              </td>
              <td className='border border-gray-300 p-3'>{talent.location}</td>
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
    </>
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

const SmallCard = ({ name, building, pathToImage }) => {
  return (
    <div className='flex items-center bg-gray-300 rounded-lg p-4 m-2 w-64'>
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
        <div className='font-bold text-lg'>{name}</div>
        <div className='text-sm text-gray-700'>{building}</div>
      </div>
    </div>
  )
}

function mobile () {
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
      bg-gray-50 shadow-md rounded-lg p-6 border border-gray-100'
      >
        {cardsData.map((card, index) => (
          <SmallCard
            key={index}
            name={card.name}
            building={card.building}
            description={card.description}
            pathToImage={card.pathToImage}
          />
        ))}
      </div>
    </>
  )
}

export default Home

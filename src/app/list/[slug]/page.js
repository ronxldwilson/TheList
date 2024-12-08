'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'

import { useParams } from 'next/navigation' // Use the new hook for `params`
import profileData from '../../../../data/profileData'
import { fromJSON } from 'postcss'
import { IconsManifest } from 'react-icons'

export default function PersonPage () {
  const params = useParams() // Use the hook to get params
  const [slug, setSlug] = useState(null)

  useEffect(() => {
    if (params && params.slug) {
      setSlug(params.slug)
    }
  }, [params])

  if (!slug) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid'
          Loading
        ></div>
      </div>
    )
  }

  const person = profileData.find(p => p.slug === slug)

  if (!person) {
    return <div>Person not found!</div>
  }

  const socialIcons = {
    facebook: <FaFacebook />,
    twitter: <FaTwitter />,
    linkedin: <FaLinkedin />,
    instagram: <FaInstagram />,
    mail: <CgMail />,
    whatsapp: <FaWhatsapp />
  }

  return (
    <div className='min-h-screen py-8 bg-gradient-to-br from-purple-500 via-blue-400 to-pink-300'>
      {/* Your content here */}

      <div className='max-w-7xl hover:text-purple-900 mx-auto px-6'>
        <Link href='/list' className='font-semibold mb-6 inline-block'>
          ← Back to the List
        </Link>
      </div>

      <div className='max-w-3xl m-2 md:mx-auto bg-white shadow-lg rounded-3xl overflow-hidden'>
        <div className='relative'>
          <Image
            src={person.bannerImage}
            width={1000}
            height={1000}
            alt='Banner'
            className='w-full h-56 sm:h-72 md:h-56 object-cover'
          />
          {/* Profile Image and Button Container */}
          <div className='absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-between px-6'>
            {/* Profile Image */}
            <div className='w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg'>
              <Image
                src={person.profileImage}
                width={500}
                height={500}
                alt='Profile'
                className='w-full h-full object-cover'
              />
            </div>
            {/* Fund Button */}
            <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105'>
              Fund
            </button>
          </div>
        </div>

        <div className='px-6 py-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>
            {person.name}
          </h1>
          <h2 className='text-lg text-gray-600 mb-4'>{person.buildingInfo}</h2>
          <p className='text-gray-500 mb-6'>{person.cardSubContent}</p>

          <div className='space-y-6'>
            <div>
              <h3 className='text-xl font-semibold text-gray-800'>
                About the Product
              </h3>
              <p className='text-gray-600'>
                {person.pageContent.about_the_product}
              </p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-gray-800'>
                How the Money Will Be Used
              </h3>
              <p className='text-gray-600'>
                {person.pageContent.how_will_funds_be_used}
              </p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-gray-800'>
                Why to Back Them
              </h3>
              <p className='text-gray-600'>
                {person.pageContent.why_to_back_them}
              </p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-gray-800'>
                About Them
              </h3>
              <p className='text-gray-600'>{person.pageContent.about_them}</p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-gray-800'>
                How to Reach Out
              </h3>
              <p className='text-gray-600'>
                {person.pageContent.how_to_reach_out}
              </p>
            </div>

            <div>
              <h3 className='text-xl font-semibold text-gray-800'>
                Social Links
              </h3>

              <ul className='flex space-x-4'>
                {Object.entries(person.pageContent.socialLinks).map(
                  ([platform, link]) => (
                    <li key={platform}>
                      <Link
                        href={link}
                        target='_blank'
                        size={100}
                        rel='noopener noreferrer'
                        className='text-gray-600 hover:text-gray-800 flex items-center '
                      >
                        {socialIcons[platform] || platform}{' '}
                        {/* Default to text if no icon */}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className='px-6 py-4 m-3 text-center'>
          <Link
            href={person.pageContent.funding_link}
            className='bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700'
          >
            Fund
          </Link>
        </div>
      </div>
    </div>
  )
}

'use client'
import { useEffect, useState } from 'react'
import profileData from '../../../../data/profileData' // Import profileData

export default function PersonPage ({ params }) {
  const [slug, setSlug] = useState(null)

  // Unwrap the params object with React.use
  useEffect(() => {
    // When the component is mounted, get the slug from params
    if (params && params.slug) {
      setSlug(params.slug)
    }
  }, [params])

  if (!slug) {
    return <div>Loading...</div> // Show loading state while slug is being fetched
  }

  // Find the person based on the slug
  const person = profileData.find(p => p.slug === slug)

  if (!person) {
    return <div>Person not found!</div>
  }

  return (
    <div className='min-h-screen bg-gray-50 py-8'>
      {/* Back to List Link */}
      <div className='max-w-7xl mx-auto px-6'>
        <a
          href='/list'
          className='text-blue-600 font-semibold mb-6 inline-block'
        >
          ← Back to the List
        </a>
      </div>

      <div className='max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
        {/* Profile Section */}
        <div className='relative'>
          <img
            src={person.bannerImage}
            alt='Banner'
            className='w-full h-56 object-cover'
          />
          <div className='absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-white'>
            <img
              src={person.profileImage}
              alt='Profile'
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        <div className='px-6 py-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>
            {person.name}
          </h1>
          <h2 className='text-lg text-gray-600 mb-4'>{person.buildingInfo}</h2>
          <p className='text-gray-500 mb-6'>{person.cardSubContent}</p>

          {/* Section: About the Product */}
          <div className='space-y-6'>
            <div>
              <h3 className='text-xl font-semibold text-gray-800'>
                About the Product
              </h3>
              <p className='text-gray-600'>
                {person.pageContent.about_the_product}
              </p>
            </div>

            {/* Section: How the Money Will Be Used */}
            <div>
              <h3 className='text-xl font-semibold text-gray-800'>
                How the Money Will Be Used
              </h3>
              <p className='text-gray-600'>
                {person.pageContent.how_will_funds_be_used}
              </p>
            </div>

            {/* Section: Why to Back Them */}
            <div>
              <h3 className='text-xl font-semibold text-gray-800'>
                Why to Back Them
              </h3>
              <p className='text-gray-600'>
                {person.pageContent.why_to_back_them}
              </p>
            </div>

            {/* Section: About Them */}
            <div>
              <h3 className='text-xl font-semibold text-gray-800'>
                About Them
              </h3>
              <p className='text-gray-600'>{person.pageContent.about_them}</p>
            </div>

            {/* Section: How to Reach Out */}
            <div>
              <h3 className='text-xl font-semibold text-gray-800'>
                How to Reach Out
              </h3>
              <p className='text-gray-600'>
                {person.pageContent.how_to_reach_out}
              </p>
            </div>

            {/* Section: Funding Link */}
            <div>
              <h3 className='text-xl font-semibold text-gray-800'>
                Funding Link
              </h3>
              <a
                href={person.pageContent.funding_link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:underline'
              >
                {person.pageContent.funding_link}
              </a>
            </div>

            {/* Section: Social Links */}
            <div>
              <h3 className='text-xl font-semibold text-gray-800'>
                Social Links
              </h3>
              <ul className='flex space-x-4'>
                {Object.entries(person.pageContent.socialLinks).map(
                  ([platform, link]) => (
                    <li key={platform}>
                      <a
                        href={link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-600 hover:text-gray-800'
                      >
                        {platform.toUpperCase()}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section (optional - for Fund button) */}
        <div className='px-6 py-4 bg-gray-100 text-center'>
          <a
            href={person.pageContent.funding_link}
            className='bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700'
          >
            Fund
          </a>
        </div>
      </div>
    </div>
  )
}

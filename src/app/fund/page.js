import CardComponent from '@/components/CardComponent'
import profileData from '../../../data/profileData'
import Link from 'next/link'
import Drawer from '@/components/Drawer'

export default function List () {
  const data = profileData

  return (
    <>
      <div className='min-h-screen flex items-center justify-center relative bg-gradient-to-br from-indigo-400 via-pink-300 to-violet-400 overflow-hidden'>
        <div className='absolute inset-0 bg-white opacity-20 mix-blend-overlay'></div>
        <Drawer />
        <div className='relative z-10'>
          <div className='bg-white m-10 rounded-lg p-10'>
            {/* Header Section */}
            <div className='text-center mb-8'>
              <h1 className='text-3xl md:text-4xl mt-5 font-bold text-gray-800'>
                The List
              </h1>
              <p className='text-gray-600 text-xl md:text-xl mt-2'>
                Discover the amazing ideas people are building
              </p>
            </div>
            {/* Cards Section */}
            <CardSection data={data} />
          </div>
        </div>
      </div>
    </>
  )
}

function CardSection ({ data }) {
  return (
    <>
      <div className=''>
        <div className='flex flex-wrap justify-center lg:mx-20 md:px-4'>
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
      </div>
    </>
  )
}

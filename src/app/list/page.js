import CardComponent from '@/components/CardComponent'
import profileData from '../../../data/profileData'
import Link from 'next/link'

export default function List () {
  const data = profileData;

  return (
    <>
      <div className='min-h-screen py-8'>
        {/* Header Section */}
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-800'>The List</h1>
          <p className='text-gray-600 mt-2'>
            Discover the amazing things people are building
          </p>
        </div>
        {/* Cards Section */}
        <CardSection data={data}/>
      </div>
    </>
  )
}

function CardSection({ data }) {
    return (
      <div className='flex flex-wrap justify-center lg:mx-20 px-4'>
        {data.map(personDetails => {
          return (
            <div key={personDetails.key}>
              <Link href={`/list/${personDetails.slug}`}>
                  <CardComponent
                    name={personDetails.name}
                    buildingInfo={personDetails.buildingInfo}
                    cardSubContent={personDetails.cardSubContent}
                    bannerImage={personDetails.bannerImage}
                    profileImage={personDetails.profileImage}
                  />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
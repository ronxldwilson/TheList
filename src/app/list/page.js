import CardComponent from '@/components/CardComponent'

export default function List () {
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
        <div className='flex flex-wrap justify-center lg:mx-20 px-4'>
          <CardComponent
            bannerImage='https://via.placeholder.com/100x100'
            profileImage='https://via.placeholder.com/150'
            name='first name'
            buildingInfo='Building ABC'
            content='John Doe is building something amazing here.'
          />
          <CardComponent
            bannerImage='https://via.placeholder.com/100x100'
            profileImage='https://via.placeholder.com/150'
            name='first name'
            buildingInfo='Building XYZ'
            content='Jane Smith is working on an awesome project.'
          />
          <CardComponent
            bannerImage='https://via.placeholder.com/100x100'
            profileImage='https://via.placeholder.com/150'
            name='first name'
            buildingInfo='Building DEF'
            content="Alex Johnson's project is revolutionary."
          />
          <CardComponent
            bannerImage='https://via.placeholder.com/100x100'
            profileImage='https://via.placeholder.com/150'
            name='first name'
            buildingInfo='Building GHI'
            content='Emily Davis is changing the game.'
          />
          <CardComponent
            bannerImage='https://via.placeholder.com/100x100'
            profileImage='https://via.placeholder.com/150'
            name='first name'
            buildingInfo='Building JKL'
            content='Chris Brown is crafting something unique.'
          />
        </div>
      </div>
    </>
  )
}

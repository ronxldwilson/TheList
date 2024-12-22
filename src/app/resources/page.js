import Drawer from '@/components/Drawer'

const Resources = () => {
  return (
    <>
      <Drawer />
      <div className='h-screen flex flex-col bg-gradient-to-r from-blue-100 to-blue-300'>
        <div className='flex flex-col items-center  justify-center h-full  text-center'>
          <div className='mt-10 bg-white min-h-[50%] w-[50%]'>
            <h1 className='text-3xl sm:text-5xl font-bold text-gray-800 mb-4'>
              Resources
            </h1>
            <p className='text-lg sm:text-xl text-gray-600'>
              We’re working hard to bring you this feature. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resources

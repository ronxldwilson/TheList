import Drawer from '@/components/Drawer'
import Link from 'next/link'

export default function Home () {
  return (
    <>
      <div className='relative min-h-screen bg-gradient-to-b from-pink-300 to-indigo-800 px-4'>
        {/* Drawer positioned at the top-left */}
        <div className='absolute top-0 left-0'>
          <Drawer />
        </div>

        {/* Centered content */}
        <div className='flex flex-col items-center justify-center min-h-screen'>
          <div className='bg-white shadow-lg rounded-lg p-8 text-center max-w-md w-full'>
            <h1 className='text-4xl font-bold text-gray-800 mb-4'>The List</h1>
            <p className='text-gray-600 mb-6'>
              The List is a platform designed to help you discover, support, and
              hire exceptional individuals.
            </p>
            <div className='flex flex-col md:justify-center md:flex-row md:space-x-2 space-y-2 md:space-y-0'>
              <Link href='/list'>
                <button className='bg-blue-500 text-white p-3 rounded-lg w-full md:w-auto'>
                  Fund or Support
                </button>
              </Link>
              <Link href='https://tally.so/r/wAWvqe'>
                <button className='bg-blue-500 text-white p-3 rounded-lg w-full md:w-auto'>
                  Apply
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

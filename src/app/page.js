import Drawer from '@/components/Drawer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="relative h-screen bg-gradient-to-b from-pink-300 to-indigo-700 px-4">
        {/* Drawer positioned at the top-left */}
        <div className="absolute top-0 left-0">
          <Drawer />
        </div>

        {/* Centered content */}
        <div className="flex flex-col items-center justify-center h-full">
          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 text-center max-w-full">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              The List
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              The List is a platform designed to help you discover, support, <br />
              and hire exceptional individuals.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:justify-around md:space-x-2">
              <Link href="/discover">
                <button className="bg-blue-500 text-white py-3 px-4 shadow-xl hover:bg-gray-200 hover:text-black rounded-lg w-full md:w-auto">
                  Discover
                </button>
              </Link>
              <Link href="/fund">
                <button className="bg-blue-500 text-white py-3 px-4 shadow-xl rounded-lg w-full hover:bg-gray-200 hover:text-black md:w-auto">
                  Fund or Support
                </button>
              </Link>
              <Link href="/hire">
                <button className="bg-blue-500 text-white py-3 px-4 shadow-xl rounded-lg w-full hover:bg-gray-200 hover:text-black md:w-auto">
                  Hire Talent
                </button>
              </Link>
            </div>
            <div className="mt-4">
              <Link href="/apply">
                <button className="bg-blue-500 text-white py-3 px-4 shadow-xl rounded-lg w-full hover:bg-gray-200 hover:text-black md:w-auto">
                  Apply to be on the list
                </button>
              </Link>
            </div>
          </div>

        {/* Footer */}
        <div className="absolute bottom-1 w-full z-100 text-center text-white">
          <p className="text-xs sm:text-sm">
            The List is an open-source platform: Contribute to the project on{' '}
            <Link
              href="https://github.com/ronxldwilson/TheList"
              className="text-gray-300 underline"
            >
              GitHub
            </Link>
          </p>
        </div>
        </div>
      </div>
    </>
  );
}

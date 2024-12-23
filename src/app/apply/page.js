import Drawer from '@/components/Drawer';
import Link from 'next/link';

export default function Apply() {
  return (
    <>
      <div className="relative h-screen bg-gradient-to-b from-blue-400 to-indigo-700 flex justify-center items-center">
        {/* Content Wrapper */}
          <Drawer />
        <div className="bg-white shadow-lg w-[80%] md:w-auto  rounded-lg p-6 sm:p-8 text-center">
            <h1 className='text-xl'>
                Are you a Builder or Job Seeker?
            </h1>
            
            <Link
                href="https://tally.so/r/wAWvqe"
            >
            <button className='bg-blue-500 m-3 text-white py-3 px-4 shadow-xl rounded-lg w-full md:w-auto'>
                Builder
            </button>
            </Link>
            
            <Link href="https://forms.gle/9sN9T2TF9iW2KZN76">
            <button className='bg-blue-500 m-3 text-white py-3 px-4 shadow-xl rounded-lg w-full md:w-auto'>
                Job Seeker
            </button>
            </Link>
        </div>
      </div>
    </>
  );
}

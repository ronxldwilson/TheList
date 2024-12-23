import Drawer from '@/components/Drawer';
import ResourceTable from '@/components/ResourceTable';

const Resources = () => {
  const resources = [
    { name: 'React Documentation', link: 'https://reactjs.org/docs/getting-started.html' },
    { name: 'Next.js Documentation', link: 'https://nextjs.org/docs' },
    { name: 'Tailwind CSS Documentation', link: 'https://tailwindcss.com/docs' },
    { name: 'Supabase Documentation', link: 'https://supabase.com/docs' },
    { name: 'Vercel Deployment Guide', link: 'https://vercel.com/docs' },
  ];

  return (
    <>
      <Drawer />
      <div className="h-screen flex flex-col bg-gradient-to-r from-blue-100 to-blue-300">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="mt-10 bg-white min-h-[50%] w-[80%] p-6 shadow-lg rounded-lg">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4">
              Resources
            </h1>

            <ResourceTable/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;

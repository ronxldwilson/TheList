import Drawer from '@/components/Drawer';
import jobPlatformsData from '../../../../data/jobPlatformsData';

const JobPlatforms = () => {
  return (
    <>
      <Drawer />
      <div className="flex justify-center py-10">
        <div className="w-[90%] lg:w-[80%] bg-white shadow-2xl rounded-lg p-6">
          <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Job Platforms Directory
          </h1>

          <div className="overflow-auto rounded-lg">
            <table className="table-auto text-xs w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="px-4 py-3 border font-semibold text-gray-700">
                    Platform Name
                  </th>
                  <th className="px-4 py-3 border font-semibold text-gray-700">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {jobPlatformsData.map((platform, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-blue-50 transition-colors`}
                  >
                    <td className="px-4 py-2 border text-gray-600">
                      {platform.name || 'N/A'}
                    </td>
                    <td className="px-4 py-2 border text-gray-600">
                      {platform.url ? (
                        <a
                          href={platform.Link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline hover:text-blue-700"
                        >
                          Visit
                        </a>
                      ) : (
                        'N/A'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPlatforms;

import Drawer from '@/components/Drawer';
import grantsData from '../../../../data/grantsData';

const Grants = () => {
  return (
    <>
      <Drawer />
      <div className="flex justify-center py-10 bg-gray-50">
        <div className="w-[90%] lg:w-[80%] bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Grants Directory
          </h1>
          <div className="overflow-auto rounded-lg">
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="px-4 py-3 border font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="px-4 py-3 border font-semibold text-gray-700">
                    Website
                  </th>
                  <th className="px-4 py-3 border font-semibold text-gray-700">
                    Grant Amount
                  </th>
                  <th className="px-4 py-3 border font-semibold text-gray-700">
                    Monies to
                  </th>
                  <th className="px-4 py-3 border font-semibold text-gray-700">
                    Institution
                  </th>
                </tr>
              </thead>
              <tbody>
                {grantsData.map((grant, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-blue-50 transition-colors`}
                  >
                    <td className="px-4 py-2 border text-gray-600">
                      {grant.Name || 'N/A'}
                    </td>
                    <td className="px-4 py-2 border text-gray-600">
                      {grant.Website ? (
                        <a
                          href={grant.Website}
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
                    <td className="px-4 py-2 border text-gray-600">
                      {grant.GrantAmount  || 'N/A'}
                    </td>
                    <td className="px-4 py-2 border text-gray-600">
                      {grant.GivenTo || 'N/A'}
                    </td>
                    <td className="px-4 py-2 border text-gray-600">
                      {grant.Institution || 'N/A'}
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

export default Grants;

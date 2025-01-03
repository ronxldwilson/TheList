const ResourceTable = () => {
    const resources = [
        { name: 'VC Funds, Fellowship Programs and Grants', link: '/resources/funding' },
        { name: 'Job Platforms' , link: '/resources/job-platforms'},
        { name: 'Design Resources (Coming Soon)' , link: ''},
        { name: 'Developer Resources (Coming Soon)' , link: ''}
    ];

    return (
        <div className='w-full overflow-auto'>
            <table className='table-auto w-full text-left border-collapse'>
                <thead>
                    <tr className='bg-gray-100'>
                        <th className='px-4 py-2 border'>Resource Name</th>
                        <th className='px-4 py-2 border'>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {resources.map((resource, index) => (
                        <tr
                            key={index}
                            className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                } hover:bg-blue-50`}
                        >
                            <td className='px-4 py-2 border'>{resource.name}</td>
                            <td className='px-4 py-2 border'>
                                <a
                                    href={resource.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-blue-500 underline'
                                >
                                    {resource.link}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResourceTable
